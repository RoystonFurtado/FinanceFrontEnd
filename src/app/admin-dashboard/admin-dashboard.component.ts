import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDashboardService } from '../admin-dashboard.service';
import { User } from '../register/register.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent{
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
    private adminDashboardService:AdminDashboardService) {

     }

  display(){
    this.adminDashboardService.fetchUser(this.userName).subscribe(response =>{
      this.id=response['id'];
      this.mobileNo=response['mobileNo'];
      this.email=response['emailId'];
      this.address=response['address'];
      this.dob=response['dob'];
      this.aadharCard=response['aadharCard'];
      this.panCard=response['panCard'];
      this.cancelledCheque=response['cancelledCheque'];
      this.cancelledChequeLink="http://localhost:8223/downloads/"+this.cancelledCheque;
    })

  }
  acceptUser(){
    this.adminDashboardService.acceptUser(this.userName).subscribe(response =>{

    });
  }
  rejectUser(){
    this.adminDashboardService.rejectUser(this.userName).subscribe(response=>{

    });
  }
  fetchUsers(){

    this.adminDashboardService.fetchUsers().subscribe(Response => {
      this.users=Response;
      console.log(Response);
    });
    this.activeflag=true;
  }

}
