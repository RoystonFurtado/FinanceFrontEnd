import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {

  phoneNo:number;
  otp:number;
  constructor(private router:Router) {};

  redirectToCreateLogin() {
    this.router.navigateByUrl('/createLogin');
  }
}
