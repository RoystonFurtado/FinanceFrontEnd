import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcceptUserComponent } from '../accept-user/accept-user.component';
import { AdminDashboardService } from '../admin-dashboard.service';
import { User } from '../register/register.component';
import { VerifyDocumentsComponent } from '../verify-documents/verify-documents.component';
import { baseUrl } from '../app.component';
import { MainService } from '../main.service';

@Component({
  selector: 'app-admin-pending-list',
  templateUrl: './admin-pending-list.component.html',
  styleUrls: ['./admin-pending-list.component.css']
})
export class AdminPendingListComponent implements OnInit {

  constructor(private router:Router,
    private adminDashboardService:AdminDashboardService,private navbar:MainService) { }
    cancelledChequeLink:String;
  id:number;
  userName:String;
  mobileNo:number;
  users:User[];
  email:String;
  address:String;
  dob:Date;
  aadharCard:String;
  panCard:String;
  cancelledCheque:String;
  displayAll:boolean=true;
  users1:User[];

  ngOnInit(): void {
    this.navbar.showDashboardBtn=false;
      this.navbar.showLogoutBtn=true;
      this.navbar.showLoginBtn=false;
      this.navbar.showRegisterBtn=false;
      this.navbar.showProductBtn=false;
      this.navbar.showOrderHistoryBtn=false;
  this.adminDashboardService.fetchPending().subscribe(Response => {
    this.users=Response;
    console.log(Response);
  });
}

  display(){
    this.adminDashboardService.fetchUser(this.userName).subscribe(response =>{
      this.users1=response;
      this.displayAll=false;
      this.id=response['id'];
      this.mobileNo=response['mobileNo'];
      this.email=response['emailId'];
      this.address=response['address'];
      this.dob=response['dob'];
      this.aadharCard=response['aadharCard'];
      this.panCard=response['panCard'];
      this.cancelledCheque=response['cancelledCheque'];
      this.cancelledChequeLink=baseUrl+"/downloads/"+this.cancelledCheque;
    })

  }
  // acceptUser(userName:String){
  //   this.adminDashboardService.acceptUser(userName).subscribe(response =>{
      
  //   });
    
  // }
  // rejectUser(userName:String){
  //   this.adminDashboardService.rejectUser(userName).subscribe(response=>{

  //   });
  // }
  verify(user :User){
    sessionStorage.setItem('userName',user.userName);
    console.log(sessionStorage.getItem('userName'));
    this.router.navigateByUrl("verify-documents");
  }


}
