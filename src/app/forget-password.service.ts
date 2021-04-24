import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { baseUrl } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {
  

  constructor(private router: Router,private http: HttpClient) {
    
   } 
  getEmailOtp(emailId:string):Observable<Object> {
    return this.http.get(baseUrl + "/forgetPassword/"+ emailId);
  }

  updatedPassword(email:string, password:string){
    return this.http.post(baseUrl+"/updatePassword",{"emailId":email,"password":password});
  }

}