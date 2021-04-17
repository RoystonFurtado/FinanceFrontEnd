import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  constructor(private registerService:RegisterService,
              private router:Router){};
  userName:string;
  mobileNo:Number;
  emailId:string;
  address:string;
  dob:string;
  password:string;
  
  confirmPassword:string;
  cardType:string;

  redirectToDashboard() {
    this.registerService.user.userName=this.userName;
    this.registerService.user.mobileNo=this.mobileNo;
    this.registerService.user.emailId=this.emailId;
    this.registerService.user.dob=this.dob;
    this.registerService.user.password=this.password;
    this.registerService.user.address=this.address;
    this.router.navigateByUrl('/document-upload');
    // console.log(this.registerService.user);
    // console.log(this.confirmPassword);
    // console.log(this.cardType);
  }

}

