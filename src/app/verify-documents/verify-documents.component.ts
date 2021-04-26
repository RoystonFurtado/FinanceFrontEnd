import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDashboardService } from '../admin-dashboard.service';
import { User } from '../register/register.component';

@Component({
  selector: 'app-verify-documents',
  templateUrl: './verify-documents.component.html',
  styleUrls: ['./verify-documents.component.css']
})
export class VerifyDocumentsComponent implements OnInit {
  
  constructor(private router:Router,
    private adminDashboardService : AdminDashboardService,private http:HttpClient) { }
    user:User;
    enableAadhar:boolean=false;
    enablePan:boolean=false;
    enableCheque:boolean=false;
    isAadharChecked:boolean=false;
    isPanChecked:boolean=false;
    isChequeChecked:boolean=false;
    action:string=null;
    isErrorPresent:boolean=true;
    errorMessage:string;
    reason:string;
    isButtonDisable:boolean=true;

  ngOnInit(): void {
    console.log(sessionStorage.getItem("userName"));
    this.adminDashboardService.fetchUserFromSession(sessionStorage.getItem("userName")).subscribe(response=>{
      this.user=response;
      console.log(this.user);
      console.log(this.isAadharChecked);
    });
    
    
  }
  enableAadharfun(){
    this.enableAadhar=true;
    // console.log(this.isAadharChecked);
  }
  enablePanfun(){
    this.enablePan=true;
    console.log("hello");
  }
  enableChequefun(){
    this.enableCheque=true;
    console.log("hello");
  }
  yourfuncAadhar(){
    this.isAadharChecked=!this.isAadharChecked;
    console.log(this.isAadharChecked);
  }
  yourfuncPan(){
    this.isPanChecked=!this.isPanChecked;
    console.log(this.isPanChecked);
  }
  yourfuncCheque(){
    this.isChequeChecked=!this.isChequeChecked;
    console.log(this.isChequeChecked);
  }
  verifyAccept(){
    if(!this.isAadharChecked || !this.isPanChecked || !this.isChequeChecked){
      this.isErrorPresent=true;
      this.errorMessage="Please approve all the Documents to accept";
    }
    else{
      this.isErrorPresent=false;
      this.action="accept";
    }
  }
  verifyReject(){
    if(this.isAadharChecked && this.isPanChecked && this.isChequeChecked){
      this.isErrorPresent=true;
      this.errorMessage="Please remove the checkbox in front of the suspicious document";
    }
    else if(this.reason==null){
      this.isErrorPresent=true;
      this.errorMessage="Please Enter the reason for rejecting user requests";
    }
    else{
      this.isErrorPresent=false;
      this.action="reject";
    }

  }
  acceptUser(userName:String){
    console.log(userName);
    this.adminDashboardService.acceptUser(userName).subscribe(response =>{
      console.log(response);
      
    });
    this.router.navigateByUrl("admin-pending-list");
    
  }
  rejectUser(userName:String){
    this.adminDashboardService.rejectUser(userName,this.reason).subscribe(response=>{

    });
    this.router.navigateByUrl("admin-pending-list");
  }
  decide(){
    if(this.action==null){
      this.errorMessage="Please select the type of action";
    }
    else if(this.action=="accept"){
      this.acceptUser(this.user.userName);
    }
    else{
      this.rejectUser(this.user.userName);
    }
    
  }


}
