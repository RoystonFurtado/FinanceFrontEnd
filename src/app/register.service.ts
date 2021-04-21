import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './register/register.component';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  constructor(private http: HttpClient) { }

  userId:string;

  register(user:User): Observable<Object>{
    let url = "http://localhost:8181/registerUser";
    return this.http.post(url,user);
  }

  documentsUpload(formData: FormData) : Observable<any> {
    let url = "http://localhost:8181/documentsUpload";
    return this.http.post(url, formData); 
  }

}

