
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from './app.component';
import { Order } from './order-history/order-history.component';
import { Product } from './product/product.component';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  fetchProduct() : Observable<Product[]>{
    let url = baseUrl+"/product";
    return this.http.get<Product[]>(url);
  }

  fetchByCategory(productCategory: String) : Observable<Product[]>{
    let url = baseUrl+"/categories?productCategory="+productCategory;
    return this.http.get<Product[]>(url);
  }

  fetchByLowToHighPrice() : Observable<Product[]>{
    let url = baseUrl+"/lowToHighPrice";
    return this.http.get<Product[]>(url);
  }

  fetchByHighToLowPrice() : Observable<Product[]>{
    let url = baseUrl+"/highToLowPrice";
    return this.http.get<Product[]>(url);
  }
  
  fetchProductDetails(productId:number): Observable<Object>{
    console.log(productId);
  let url=baseUrl+"/product-description?productId="+productId;
  return this.http.get(url);
  }

  orderData(order:Order): Observable<Object>{
    let url=baseUrl+"/order";
    return this.http.post(url,order);
  }
}
