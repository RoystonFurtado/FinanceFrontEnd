import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDetails } from './product-description/product-description.component';

@Injectable({
  providedIn: 'root'
})

export class PlaceOrderService {
  orderStatus:string;
  constructor(private http:HttpClient) { }

  orderData(orderDetails:OrderDetails): Observable<Object>{
    let url="http://localhost:8188/order";
    return this.http.post(url,orderDetails);
  }
}
