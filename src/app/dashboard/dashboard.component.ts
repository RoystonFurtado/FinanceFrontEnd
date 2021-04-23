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
    // const cancelbtn=document.getElementsByClassName('cancel-btn')[0];
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
  userName:string="John Doe";
  showPaymentPopup:boolean;
  
  selectedOrder:ActiveOrder;
  activeOrders:ActiveOrder[];

  ngOnInit():void {
    //Get card details
    this.dashboardService.cardDetails(10056).subscribe(response=>{
      this.cardNo=response['cardNo'];
      this.expiryDate=response['cardExpiryDate'];
      let d=new Date(this.expiryDate);
      this.exp=(d.getMonth()+1)+"/"+d.getFullYear();
      this.cardCreditUsed=response['cardCreditUsed'];
      this.cardBalance=response['cardBalance'];
    });

    //Get Emi Card Type Details
    this.dashboardService.emiCardTypeDetails(10056).subscribe(response=>{
      this.cardType=response['cardType'];
      this.cardLimit=response['cardLimit'];
    });

    this.dashboardService.pendingInstallmentDetails(10056).subscribe(response=>{
      this.activeOrders=response;
      console.log(this.activeOrders);
    });
  }

  getOrderDetails() {
    this.router.navigateByUrl('/order-history');
  }

  redirectToProducts() {
    this.router.navigateByUrl('/product-listing');
  }

  showPaymentBox(order:ActiveOrder) {
    this.showPaymentPopup=true;
    this.selectedOrder=order;
  }

  hidePaymentBox() {
    this.showPaymentPopup=false;
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
              public dueDate:Date){}
}
