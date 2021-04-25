import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Observable } from 'rxjs';
import { User } from './register/register.component';
import { baseUrl } from './app.component';
import { ActiveOrder, CardDetails} from './dashboard/dashboard.component';
import { PaymentInfo } from './payment/payment.component';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  userId: string;
  order:ActiveOrder;
  constructor(private router: Router, private http: HttpClient) {
    
    // this.userId = sessionStorage.getItem("userId");
    // console.log(this.userId);
    // if (this.userId == null) this.navigateToHome();
    // else this.getOrderDetails();
  }
    // if (this.userId == null) this.navigateToHome();
    // else this.getOrderDetails()
  //     ;
  //  }

  

  // cardDetails(userId:Number): Observable<Object>{
  //   let url = baseUrl+"/cardInfo?userId="+userId;
  // }

  navigateToHome() {
    alert("Invalid Session");
    this.router.navigateByUrl("/");
  }

  getOrderDetails() {
    var url = baseUrl+"/recentOrders";
    this.http.post(url, { "userId": this.userId });

  }


  cardDetails(userId:Number): Observable<CardDetails>{
    let url = baseUrl+"/cardDetails?userId="+userId;
    return this.http.get<CardDetails>(url);
  }

  pendingInstallmentDetails(userId:Number): Observable<ActiveOrder[]> {
    let url = baseUrl+"/pendingInstallmentInfo?userId="+userId;
    return this.http.get<ActiveOrder[]>(url);
  }

  updateInstallmentPhase(userId:Number) {
    let url = baseUrl+"/checkInstallmentPhase?userId="+userId;
    return this.http.get(url);
  }

  makePayment(orderId:Number,installmentNo:Number,paymentInfo:PaymentInfo) {
    let url = baseUrl+"/makePayment";
    return this.http.post(url,{orderId,installmentNo,paymentInfo});
  }


}
