import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router:Router){};

  cardNo:Number=1092745692745082;
  userName:string="John Doe";
  expiryDate:string="11/2027";
  cardType:string="Gold";
  totalCredit:Number=200000;
  creditUsed:Number=150000;
  remainingCredit:Number=50000;
  productName:string="Iphone 7";
  amountPaid:Number=20000;
  amountBalance:Number=50000;
  productPrice:Number=70000;
  purchaseDate:string="12/07/2020";

  redirectToProducts() {
    this.router.navigateByUrl('/product-listing');

  }

}
