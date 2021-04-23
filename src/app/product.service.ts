
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order-history/order-history.component';

import { Product } from './product/product.component';




@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  fetchProduct() : Observable<Product[]>{
    let url = "http://localhost:8181/product";
    return this.http.get<Product[]>(url);
  }

  fetchByCategory(productCategory: String) : Observable<Product[]>{
    let url = "http://localhost:8181/categories?productCategory="+productCategory;
    return this.http.get<Product[]>(url);
  }

  fetchByLowToHighPrice() : Observable<Product[]>{
    let url = "http://localhost:8181/lowToHighPrice";
    return this.http.get<Product[]>(url);
  }

  fetchByHighToLowPrice() : Observable<Product[]>{
    let url = "http://localhost:8181/highToLowPrice";
    return this.http.get<Product[]>(url);
  }
  
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
