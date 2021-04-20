import { Component, OnInit } from '@angular/core';
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
  }
  exp:string;
  cardNo:Number;
  expiryDate:Date;
  cardCreditUsed:Number;
  cardBalance:Number;
  cardLimit:Number;
  cardType:string;
  userName:string="John Doe";
  productName:string="Iphone 7";
  amountPaid:Number=20000;
  amountBalance:Number=50000;
  productPrice:Number=70000;
  purchaseDate:string="12/07/2020";

  redirectToProducts() {
    this.router.navigateByUrl('/product-listing');

  }
}


class Products{

}