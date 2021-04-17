import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  user:User=new User();

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
              public profilePic?:string){}
}