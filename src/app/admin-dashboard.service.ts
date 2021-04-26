import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductImages } from './product/product.component';
import { baseUrl } from './app.component';
import { User } from './register/register.component';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {

  constructor(private http:HttpClient) {

   }

   fetchUser(userName : String):Observable<User[]>{
     console.log(userName);
    let url = baseUrl+"/adminDashboard?userName="+userName;
    return this.http.get<User[]>(url);

   }
   fetchUserFromSession(userName : String):Observable<Object>{
    console.log(userName);
   let url = baseUrl+"/fetchUserFromSession?userName="+userName;
   let temp=this.http.get(url);
   temp.subscribe(response=>{
     console.log(response);
   })
   return temp;

  }
   fetchPending():Observable<User[]>{
    let url = baseUrl+"/fetchPendingUser";
    return this.http.get<User[]>(url);

   }
   acceptUser(userName:String):Observable<Object>{
     console.log(userName);
     let url = baseUrl+"/acceptUser?userName="+userName;
     return this.http.get(url);
   }
   rejectUser(userName:String,message:string):Observable<Object>{
     let url =baseUrl+"/rejectUser?userName="+userName+"&message="+message;
     return this.http.get(url);
   }

   fetchUsers():Observable<User[]>{
    let url1 = baseUrl+"/adminDashboardAll";
    console.log(url1);
     return this.http.get<User[]>(url1);
   }
   addProduct(product :Product):Observable<any>{
     //var productImg = {product,image};
     console.log(product);
     let url = baseUrl+"/addProducts";
      return this.http.post(url,product);
   }
   addProductImage(formData:FormData):Observable<Object>{
     console.log(formData);
     let url = baseUrl+"/addProductImage";
     return this.http.post(url,formData);
   }
   fetchAcceptedUser(userName:String):Observable<User[]>{
     let url=baseUrl+"/fetchAcceptedUser?userName="+userName;
     return this.http.get<User[]>(url);
   }
}
