import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router:Router){};

  productName:string="IPhone8";
  productDescription:string="This is an expensive phone.";
  productPrice:Number=80000;
  productImageUrl:string="assets/iphone8.jfif";

  redirectToRegister() {
    this.router.navigateByUrl('/register');
  }

  redirectToLogin() {
    this.router.navigateByUrl('/login');
  }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

}
