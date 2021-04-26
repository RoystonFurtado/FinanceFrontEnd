import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent {

  constructor(private router: Router,
    public navbar:MainService) {  
  }

  title = 'FinanceFrontEnd';
  redirectToLogin() {
    this.router.navigateByUrl('/login',);
  }
  redirectToRegister() {
    // console.log(baseUrl + this.router.url);
    this.router.navigateByUrl('/register');
  }
  redirectToDashboard() {
    this.router.navigateByUrl('/dashboard');
  }

  redirectToProducts() {
    this.router.navigateByUrl('/product-listing');
  }

  logout() {
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("admin");
    this.router.navigateByUrl('/');
  }

  redirectToHome() {
    this.router.navigateByUrl('/');
  }

  redirectToOrderHistory() {
    this.router.navigateByUrl('/order-history');
  }

}
