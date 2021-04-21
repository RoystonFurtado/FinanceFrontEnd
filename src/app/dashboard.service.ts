import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Observable } from 'rxjs';
import { User } from './register/register.component';
import { baseUrl } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

 
  constructor(private http: HttpClient) { }

  cardDetails(userId:Number): Observable<Object>{
    let url = baseUrl+"/cardInfo?userId="+userId;
    return this.http.get(url);
  }

  emiCardTypeDetails(userId:Number): Observable<Object>{
    let url = baseUrl+"/emiCard?userId="+userId;
    return this.http.get(url);
  }


}
