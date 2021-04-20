import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product/product.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  fetchProductImages(id: number) : Observable<Product>{
    let url = "http://localhost:8181/product?productId="+id;
    return this.http.get<Product>(url);
  }
}
