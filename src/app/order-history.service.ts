import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { baseUrl, Entity_UserId } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {
  private userId:string;
  constructor(private router: Router,private http: HttpClient) {
    
   }

   
  getOrderDetails(userId:string):Observable<Object> {
    return this.http.get(baseUrl + "/recentOrders?userId="+ userId);
  }
  
  navigateToHome() {
    alert("Invalid Session");
    this.router.navigateByUrl("/");
  }

  redirectToDashboard() {
    this.router.navigateByUrl('/dashboard');
  }
}
