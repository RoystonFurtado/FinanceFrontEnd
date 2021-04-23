import { Component, Directive, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Directive({
  selector:'[disappear]'
})
export class DisappearDirective {
  @Output() disappear = new EventEmitter<MouseEvent>();
  constructor(private elementRef:ElementRef) {}

  @HostListener('document:click',['$event']) onClickOutside(event:MouseEvent) { //$event 
    const targetElement=event.target as HTMLElement; //Exactly where the user clicked  stored in target element
    const paybtn=document.getElementsByClassName('orders-container')[0];
    //const editbtn=document.getElementsByClassName('contacts-container')[0];


    const closebtn=document.getElementsByClassName('close-btn')[0];
    //const paybtn=document.getElementsByClassName('confirm-pay-btn')[0];

    //When clicked anywhere outside add contact box, addcontactbutton and edit contact button(to avoid first click), emit disappear event

    if( (!(this.elementRef.nativeElement.contains(targetElement)))  && !(paybtn.contains(targetElement))|| closebtn.contains(targetElement) )

      this.disappear.emit(event);
  }
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(private router:Router,
              private dashboardService:DashboardService){};

  exp:string;
  cardNo:Number;
  expiryDate:Date;
  cardCreditUsed:Number;
  cardBalance:Number;
  cardLimit:Number;
  cardType:string;
  userName:string="Royston Furtado";
  showPaymentPopup:boolean;
  showOrderPopup:boolean;
  purchaseDate:string;
  time:string;
  dueDates:string[]=Array();
  paymentDueDate:string;
  selectedDueDate:string;
  
  selectedOrder:ActiveOrder;
  paymentOrder:ActiveOrder;
  activeOrders:ActiveOrder[];

  ngOnInit():void {
    //Get card details
    this.dashboardService.cardDetails(10032).subscribe(response=>{
      this.cardNo=response['cardNo'];
      this.expiryDate=response['cardExpiryDate'];
      let d=new Date(this.expiryDate);
      this.exp=(d.getMonth()+1)+"/"+d.getFullYear();
      this.cardCreditUsed=response['cardCreditUsed'];
      this.cardBalance=response['cardBalance'];
    });

    //Get Emi Card Type Details
    this.dashboardService.emiCardTypeDetails(10032).subscribe(response=>{
      this.cardType=response['cardType'];
      this.cardLimit=response['cardLimit'];
    });

    //this.dashboardService.updateInstallmentPhase(10056).subscribe(); 

    this.dashboardService.pendingInstallmentDetails(10056).subscribe(response=>{
      this.activeOrders=response;
      for(let i=0;i<this.activeOrders.length;i++) {
        let d=new Date(this.activeOrders[i].dueDate);
        this.dueDates[i]=d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();
      }
    });
  }

  async pay(orderId:Number) {
    //Make Payment
    let response=await this.dashboardService.makePayment(orderId).toPromise();
      alert(response['message']);

    //Update Card Details
    this.dashboardService.cardDetails(10056).subscribe(response=>{
      this.cardNo=response['cardNo'];
      this.expiryDate=response['cardExpiryDate'];
      let d=new Date(this.expiryDate);
      this.exp=(d.getMonth()+1)+"/"+d.getFullYear();
      this.cardCreditUsed=response['cardCreditUsed'];
      this.cardBalance=response['cardBalance'];
    });

    //Update Pending Installments
    this.dashboardService.pendingInstallmentDetails(10056).subscribe(response=>{
      this.activeOrders=response;
      for(let i=0;i<this.activeOrders.length;i++) {
        let d=new Date(this.activeOrders[i].dueDate);
        this.dueDates[i]=d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();
      }
    });

    this.hidePaymentBox();

  }

  getOrderDetails() {
    this.router.navigateByUrl('/order-history');
  }

  redirectToProducts() {
    this.router.navigateByUrl('/product-listing');
  }

  showBox(event,order:ActiveOrder,i:Number) {
    if(event.target.name==="payButton"){
      this.showPaymentPopup=true;
      this.paymentOrder=order;
      let d=new Date(this.paymentOrder.dueDate);
      this.paymentDueDate=d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();
    }
    else {
      this.showOrderPopup=true;
      this.selectedOrder=order;
      let d=new Date(this.selectedOrder.dueDate);
      this.selectedDueDate=d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();
    }
  }

  showPaymentBox(order:ActiveOrder) {
    this.showPaymentPopup=true;
    this.paymentOrder=order;
  }

  hidePaymentBox() {
    this.showPaymentPopup=false;
  }

  hideOrderBox() {
    this.showOrderPopup=false;
  }

}


export class ActiveOrder {
  constructor(public orderId:Number,
              public productName:string,
              public productPrice:Number,
              public emiMonthsPaid:Number,
              public monthlyEmiAmount:Number,
              public tenurePeriod:Number,
              public purchaseDate:Date,
              public amountPaid:Number,
              public amountBalance:Number,
              public installmentNo:Number,
              public dueDate:Date,
              public fine:Number,
              public pending:boolean){}
}
