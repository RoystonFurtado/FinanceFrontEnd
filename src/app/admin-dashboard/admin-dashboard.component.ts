import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDashboardService } from '../admin-dashboard.service';
import { MainService } from '../main.service';
import { User } from '../register/register.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{
  cancelledChequeLink:String;
  id:number;
  userName:String;
  mobileNo:number;
  email:String;
  address:String;
  dob:Date;
  aadharCard:String;
  panCard:String;
  cancelledCheque:String;
  users:User[];
  activeflag:boolean;


  constructor(private router:Router,
    private adminDashboardService:AdminDashboardService,private navbar:MainService) {

     }

     ngOnInit():void {
      this.navbar.showDashboardBtn=false;
      this.navbar.showLogoutBtn=true;
      this.navbar.showLoginBtn=false;
      this.navbar.showRegisterBtn=false;
      this.navbar.showProductBtn=false;
      this.navbar.showOrderHistoryBtn=false;
     }

     redirectToPendingRequest(){
       this.router.navigateByUrl("admin-pending-list");
     }
  fetchUsers(){
    this.router.navigateByUrl("admin-accepted-list");
  }
  insertProduct(){
    this.router.navigateByUrl("add-product");
  }

}
