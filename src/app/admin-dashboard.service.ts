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
   addProduct(product :Product):Observable<any>{
     //var productImg = {product,image};
     console.log(product);
     let url = "http://localhost:8223/addProducts";
      return this.http.post(url,product);
   }
   addProductImage(formData:FormData){
     console.log(formData);
     let url = "http://localhost:8223/addProductImage";
     return this.http.post(url,formData);
   }
}
