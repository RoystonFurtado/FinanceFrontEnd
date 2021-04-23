import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { baseUrl } from '../app.component';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {

  email: string;
  otp:number;
  emailError: string;
  otpError:string;

  constructor(private router:Router, private http: HttpClient) {};

  emailVerification() {
    var validated = false;
    if (this.email == null || this.email.length == 0) {
      this.emailError = "email can't be empty";
      validated = false;
    }
    else {
      this.emailError = null;
      validated = true;
    }
    if(this.email == "Email Id") {
      this.http.post(baseUrl+"/email", {"email": this.email}).subscribe(data => {
        console.log(data);
      });
    }
  }
  otpVerification() {
    var validated = false;
    if (validated && this.otp == null) {
      this.otpError = "OTP can't be empty";
      validated = false;
    }
    else {
      this.otpError = null;
      validated = true;
    }
  }
  redirectToCreateLogin() {
    this.router.navigateByUrl('/createLogin');
  }

  //for time beign
  createPassword() {
    console.log("otp generated");
  }
}
