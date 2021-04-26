import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(private router:Router,
              private dashboardService:DashboardService){};

  exp:string;
  showOrderPopup:boolean;
  purchaseDate:string;
  time:string;
  dueDates:string[]=Array();
  selectedDueDate:string;
  
  cardDetails:CardDetails;
  selectedOrder:ActiveOrder;
  activeOrders:ActiveOrder[];

  ngOnInit():void {
    //Get card details
    this.dashboardService.cardDetails(10056).subscribe(response=>{
      this.cardDetails=response;
      let d=new Date(this.cardDetails.cardExpiryDate);
      this.exp=(d.getMonth()+1)+"/"+d.getFullYear();
    });

    //this.dashboardService.updateInstallmentPhase(10056).subscribe(); 

    this.dashboardService.pendingInstallmentDetails(10032).subscribe(response=>{
      this.activeOrders=response;
      for(let i=0;i<this.activeOrders.length;i++) {
        let d=new Date(this.activeOrders[i].dueDate);
        this.dueDates[i]=d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();
      }
    });
  }

  getOrderDetails() {
    this.router.navigateByUrl('/order-history');
  }

  redirectToProducts() {
    this.router.navigateByUrl('/product-listing');
  }

  redirectToPayment(order:ActiveOrder) {
    this.dashboardService.order=order;
    this.router.navigateByUrl('/payment');
  }

  showBox(order:ActiveOrder,i:Number) {
      this.showOrderPopup=true;
      this.selectedOrder=order;
      if(this.selectedOrder.installmentNo===0)
        this.selectedOrder.installmentNo=undefined;
      if(this.selectedOrder.dueDate===null)
        this.selectedDueDate=undefined;
      else {
        let d=new Date(this.selectedOrder.dueDate);
        this.selectedDueDate=d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();
      }
  }

  hideOrderBox() {
    this.showOrderPopup=false;
  }

}


export class ActiveOrder {
  constructor(
    public orderId:number,
    public productName:string,
    public productPrice:number,
    public emiMonthsPaid:number,
    public monthlyEmiAmount:number,
    public tenurePeriod:number,
    public purchaseDate:Date,
    public amountPaid:number,
    public amountBalance:number,
    public installmentNo:number,
    public dueDate:Date,
    public fine:number,
    public pending:boolean){}
}

export class CardDetails {
  constructor(
    public userName:string,
    public cardNo:number,
    public cardBalance:number,
    public cardCreditUsed:number,
    public cardLimit:number,
    public cardType:string,
    public cardExpiryDate:Date){}
}
