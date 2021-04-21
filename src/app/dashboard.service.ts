import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Observable } from 'rxjs';
import { User } from './register/register.component';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  userId: string;
  constructor(private router: Router, private http: HttpClient) {
    console.log(this.userId);
    this.userId = sessionStorage.getItem("userId");
    if (this.userId == null) this.navigateToHome();
    else this.getOrderDetails()
      ;
  }


  navigateToHome() {
    alert("Invalid Session");
    this.router.navigateByUrl("/");
  }

  getOrderDetails() {
    var url = "http://localhost:8223/recentOrders";
    this.http.post(url, { "userId": this.userId });

  }


  cardDetails(userId:Number): Observable<Object>{
    let url = "http://localhost:8223/cardInfo?userId="+userId;
    return this.http.get(url);
  }

  emiCardTypeDetails(userId:Number): Observable<Object>{
    let url = "http://localhost:8223/emiCard?userId="+userId;
    return this.http.get(url);
  }


}
