import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user: User=new User();

  constructor(private router:Router){};

  redirectToDashboard() {
    this.router.navigateByUrl('/dashboard');
  }

}

export class User{
  name:string;
  phoneNo:number;
  email:string;
  userName:string;
  address:string;
  password:string;
  confirmPassword:string;
  cardType:string;
  cardNo:number;



}
