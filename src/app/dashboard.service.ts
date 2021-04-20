import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './register/register.component';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  cardDetails(userId:Number): Observable<Object>{
    let url = "http://localhost:8181/cardInfo?userId="+userId;
    return this.http.get(url);
  }

  emiCardTypeDetails(userId:Number): Observable<Object>{
    let url = "http://localhost:8181/emiCard?userId="+userId;
    return this.http.get(url);
  }

}
