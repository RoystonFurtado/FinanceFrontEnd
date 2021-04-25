import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit{

  constructor(private router:Router,
              private registerService:RegisterService){};

  user:User;
  confirmPassword:string;
  cardType:string;

  NameError:string;
  PassError:string;
  ConPassError:string;
  EmailError:string;
  CardError:string;
  PhoneError:string;
  AddressError:string;

  ngOnInit(): void {
    this.user=new User();
    this.user.emiCard=new emiCard();
  }

  registerUser() {

    var validated = false;
    if (this.user.userName == null || this.user.userName.length == 0) {
      this.NameError = "User name can't be empty";
      validated = false;
    }
    else {
      this.NameError = null;
      validated = true;
    }
    if (this.user.mobileNo == null || !(this.user.mobileNo.toString().length == 10)) {
      this.PhoneError = "Invalid Phone No";
      validated = false;
    }
    else {
      this.PhoneError = null;
      validated = true;
    }
    if (this.user.emailId == null || !(this.user.emailId.includes("@") && this.user.emailId.includes(".com") && (this.user.emailId.indexOf(".com")-this.user.emailId.indexOf("@")>3))) {
      this.EmailError = "Invalid EmailId";
      validated = false;
    }
    else {
      this.EmailError = null;
      validated = true;
    }
    if (this.user.password == null || this.user.password.length<8) {
      this.PassError = "Password length should be atleast 8";
      validated = false;
    }
    else {
      this.PassError = null;
      validated = true;
    }
    if (!(this.user.password === this.confirmPassword)) {
      this.ConPassError = "Please enter the password correctly";
      validated = false;
    }
    else {
      this.ConPassError = null;
      validated = true;
    }
    if (this.user.emiCard.cardType == null) {
      this.CardError = "Select card type";
      validated = false;
    }
    else {
      this.CardError = null;
      validated = true;
    }
    
    if(validated){
      this.registerService.register(this.user).subscribe(response=>{
        console.log("User Id-->"+response["registeredUserId"]);
        this.registerService.userId=response["registeredUserId"];
        alert(JSON.stringify(response));
      });
      this.router.navigateByUrl('/document-upload');
    }

  }
}

export class User{
  constructor(public userName?:string,
              public mobileNo?:Number,
              public emailId?:string,
              public address?:string,
              public password?:string,
              public dob?:string,
              public emiCard?:emiCard,
              public profileStatus?:string,
              public aadharCard?:string,
              public panCard?:string,
              public cancelledCheque ?:string){}
              
}
export class emiCard{
  constructor(public cardType?:string){}
}