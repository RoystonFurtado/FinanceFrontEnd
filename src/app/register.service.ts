import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from './app.component';
import { User } from './register/register.component';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  constructor(private http: HttpClient) { }

  userId:string;

  register(user:User): Observable<Object>{

    let url = baseUrl+"/registerUser";
    return this.http.post(url,user);
  }

  documentsUpload(formData: FormData) : Observable<any> {

    let url = baseUrl+"/documentsUpload";
    return this.http.post(url, formData); 
  }

}

