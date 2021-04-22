import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from './app.component';
import { User } from './register/register.component';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {

  constructor(private http:HttpClient) {

   }

   fetchUser(userName : String):Observable<Object>{
     console.log(userName);
    let url = baseUrl+"/adminDashboard?userName="+userName;
    return this.http.get(url);

   }
   acceptUser(userName:String):Observable<Object>{
     console.log(userName);
     let url = baseUrl+"/acceptUser?userName="+userName;
     return this.http.get(url);
   }
   rejectUser(userName:String):Observable<Object>{
     let url =baseUrl+"/rejectUser?userName="+userName;
     return this.http.get(url);
   }

   fetchUsers():Observable<User[]>{
    let url1 = baseUrl+"/adminDashboardAll";
    console.log(url1);
     return this.http.get<User[]>(url1);
   }
}
