import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
