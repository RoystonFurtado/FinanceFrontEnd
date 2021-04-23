import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDashboardService } from '../admin-dashboard.service';

@Component({
  selector: 'app-admin-pending-list',
  templateUrl: './admin-pending-list.component.html',
  styleUrls: ['./admin-pending-list.component.css']
})
export class AdminPendingListComponent implements OnInit {

  constructor(private router:Router,
    private adminDashboardService:AdminDashboardService) { }

  ngOnInit(): void {
  }
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

}
