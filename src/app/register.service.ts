import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  user:User=new User();
  emiCard:emiCard=new emiCard();
  
  constructor(private http: HttpClient) { }

  register(): Observable<Object>{
    let url = "http://localhost:8181/registerUser";
    return this.http.post(url,this.user);
  }

}

export class User{
  constructor(public userName?:string,
              public mobileNo?:Number,
              public emailId?:string,
              public address?:string,
              public password?:string,
              public dob?:string,
              public aadharCard?:string,
              public panCard?:string,
              public cancelledCheque?:string,
              public profilePic?:string,
              public emiCard?:emiCard){}
              
  
}
export class emiCard{
  constructor(public cardType?:string){}
}