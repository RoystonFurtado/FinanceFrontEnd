import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Order} from  './product-description/product-description.component';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  fetchProductDetails(productId:number): Observable<Object>{
    console.log(productId);
  let url="http://localhost:8188/product-description?productId="+productId;
  return this.http.get(url);
  }

  orderData(order:Order): Observable<Object>{
    let url="http://localhost:8188/order";
    return this.http.post(url,order);
  }




}
