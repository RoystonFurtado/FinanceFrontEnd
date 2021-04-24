import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';
import { ActiveOrder } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  order:ActiveOrder;
  paymentInfo:PaymentInfo=new PaymentInfo();

  constructor(private router:Router,
    private dashboardService:DashboardService){};

  ngOnInit(): void {
    this.order=this.dashboardService.order;
  }

  pay() {
    //Make Payment
    this.paymentInfo.paymentAmount=this.order.monthlyEmiAmount+this.order.fine;
    console.log(this.paymentInfo);
    this.dashboardService.makePayment(this.order.orderId,this.order.installmentNo,this.paymentInfo).subscribe(response=>{
      alert(response['message']);
    });
  }

}

export class PaymentInfo {
  constructor(
    public paymentInfoId?:number,
    public paymentAmount?:number,
    public paymentMethod?:string,
    public payerCardNo?:number,
    public payerName?:string,
    public cardExpiryDate?:Date,
    public bankName?:string
  ){}
}