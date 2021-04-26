import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent {

  constructor(private router: Router) {
    
  }
  title = 'FinanceFrontEnd';
  redirectToLogin() {
    this.router.navigateByUrl('/login',);
  }
  redirectToRegister() {
    // console.log(baseUrl + this.router.url);
    this.router.navigateByUrl('/register');
  }


}
