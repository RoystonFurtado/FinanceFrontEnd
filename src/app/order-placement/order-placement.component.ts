import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-order-placement',
  templateUrl: './order-placement.component.html',
  styleUrls: ['./order-placement.component.css']
})
export class OrderPlacementComponent implements OnInit {

  constructor(private navbar:MainService,private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("userId")!==null) {
      this.navbar.showDashboardBtn=true;
      this.navbar.showLogoutBtn=true;
      this.navbar.showLoginBtn=false;
      this.navbar.showRegisterBtn=false;
      this.navbar.showProductBtn=true;
      this.navbar.showOrderHistoryBtn=true;
    }
    else {
      this.redirectToHome();   
    }
  }

  redirectToHome() {
    this.router.navigateByUrl('home');
  }
  

}
