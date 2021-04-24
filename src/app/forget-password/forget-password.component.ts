import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { baseUrl, Entity_emailId } from '../app.component';
import { ForgetPasswordService } from '../forget-password.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  email: string;
  otp: number;
  emailError: string;
  otpError: string;
  responseOtp: number;

  constructor(private router: Router,
    private http: HttpClient,
    private forgetpassword: ForgetPasswordService
  ) { };


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
    if (validated) {
      this.forgetpassword.getEmailOtp(this.email).subscribe(data => {
        this.responseOtp = data as number;
        console.log(data);
      });
    }
  }
  otpVerification() {

    if (this.responseOtp == null) {
      this.otpError = "Retry";
    }
    else if (this.otp == null || this.otp == 0) {

      this.otpError = "Please enter a OTP";
    }
    else if (this.responseOtp != this.otp) {
      this.otpError = "Invalid OTP"
    }
    else {
      this.otpError = null;
      console.log("debug");
      this.redirectToCreatePassword();
    }
  }
  redirectToCreatePassword() {
    sessionStorage.setItem(Entity_emailId, this.email);;
    this.router.navigateByUrl('/create-password');
  }

};


