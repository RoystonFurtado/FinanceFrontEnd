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
  NameError:string;
  PassError:string;
  ConPassError:string;
  EmailError:string;
  CardError:string;
  PhoneError:string;
  AddressError:string;


  
  confirmPassword:string;
  cardType:string;

validate(){
  var validated = false;
    if (this.userName == null || this.userName.length == 0) {
      this.NameError = "User name can't be empty";
      validated = false;
    }
    else {
      this.NameError = null;
      validated = true;
    }
    if (this.mobileNo == null || !(this.mobileNo.toString().length == 10)) {
      this.PhoneError = "Invalid Phone No";
      validated = false;
    }
    else {
      this.PhoneError = null;
      validated = true;
    }
    if (this.emailId == null || !(this.emailId.includes("@") && this.emailId.includes(".com") && (this.emailId.indexOf(".com")-this.emailId.indexOf("@")>3))) {
      this.EmailError = "Invalid EmailId";
      validated = false;
    }
    else {
      this.EmailError = null;
      validated = true;
    }
    if (this.password == null || this.password.length<8) {
      this.PassError = "Password length should be atleast 8";
      validated = false;
    }
    else {
      this.PassError = null;
      validated = true;
    }
    if (!(this.password === this.confirmPassword)) {
      this.ConPassError = "Please enter the password correctly";
      validated = false;
    }
    else {
      this.ConPassError = null;
      validated = true;
    }
    if (this.cardType == null) {
      this.CardError = "Select card type";
      validated = false;
    }
    else {
      this.CardError = null;
      validated = true;
    }
    
    if(validated){
      this.redirectToDashboard();
    }
}


  redirectToDashboard() {
    this.registerService.user.userName=this.userName;
    this.registerService.user.mobileNo=this.mobileNo;
    this.registerService.user.emailId=this.emailId;
    this.registerService.user.dob=this.dob;
    this.registerService.user.password=this.password;
    this.registerService.user.address=this.address;
    this.registerService.emiCard.cardType=this.cardType;
    this.registerService.user.emiCard = this.registerService.emiCard;
    this.router.navigateByUrl('/document-upload');
    // console.log(this.registerService.user);
    // console.log(this.confirmPassword);
    // console.log(this.cardType);
  }

}

