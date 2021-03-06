import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';
import { ActiveOrder } from '../dashboard/dashboard.component';
import { MainService } from '../main.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @ViewChild('myForm',{static:false}) public MyForm: NgForm;

  order:ActiveOrder;
  paymentInfo:PaymentInfo=new PaymentInfo();
  paymentMethods: string[] = ['Credit Card','Debit Card'];
  banks: string[] = ['SBI Bank','ICICI Bank','HDFC Bank','HSBC Bank','Citi Bank','Axis Bank','Kotak Mahindra Bank'];
  paymentMethodError:boolean;
  today:string;
  showPaymentPopup:boolean;
  paymentDueDate:string;

  constructor(private router:Router,
    private dashboardService:DashboardService,
    private navbar:MainService){};

  ngOnInit(): void {
    if(sessionStorage.getItem("userId")!==null) {
      this.navbar.showDashboardBtn=true;
      this.navbar.showLogoutBtn=true;
      this.navbar.showLoginBtn=false;
      this.navbar.showRegisterBtn=false;
      this.navbar.showProductBtn=true;
      this.navbar.showOrderHistoryBtn=true;
    }
    else {
      this.redirectToHome();   
    }
    
    this.order=this.dashboardService.order;
    let today=new Date();
    let date=(today.getDate()<10)?"0"+today.getDate():today.getDate();
    let month=((today.getMonth()+1)<10)?"0"+(today.getMonth()+1):(today.getMonth()+1);
    let year=today.getFullYear();
    this.today=year+'-'+month+'-'+date;  
    console.log(this.order);
  }

  redirectToHome() {
    this.router.navigateByUrl('home');
  }

  onRadioChange() {
    this.paymentMethodError=false;
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  hidePaymentBox() {
    this.showPaymentPopup=false;
  }

  showPaymentBox() {
    if(this.paymentInfo.paymentMethod===undefined)
      this.paymentMethodError=true;
    else if(this.MyForm.valid) {
      this.showPaymentPopup=true;
      let d=new Date(this.order.dueDate);
      this.paymentDueDate=d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();
    }
  }

  async pay() {
    //Make Payment
      this.paymentInfo.paymentAmount=this.order.monthlyEmiAmount+this.order.fine;
      //Synchronous Call
      let response=await this.dashboardService.makePayment(this.order.orderId,this.order.installmentNo,this.paymentInfo).toPromise();
      alert(response['message']);

      this.hidePaymentBox();
      this.router.navigateByUrl("/dashboard");
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