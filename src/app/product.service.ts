import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  fetchProductDetails(productId:number): Observable<Object>{
  let url="http://localhost:8181/product-description?productId="+productId;
  return this.http.get(url);
  }

}
