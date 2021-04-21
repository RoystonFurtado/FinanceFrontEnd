import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { baseUrl, Entity_UserId } from '../app.component';
import { OrderHistoryService } from '../order-history.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent {


  constructor(private router: Router, private orderhistoryService: OrderHistoryService) {
    console.log(this.userId);
    this.userId = sessionStorage.getItem(Entity_UserId);
    if (this.userId == null) this.orderhistoryService.navigateToHome();
    else
      this.getOrders();
  }

  userId: string;
  message: string;
  orders: Array<Order>;
  transactions: Array<Payment> = Array<Payment>(); //to intiate empty array
  fd = formatDate; //Format Date Method, used in html file

  getOrders() {
    this.orderhistoryService.getOrderDetails(this.userId).subscribe((resp) => {
      if (resp["orders"] == null || resp["orders"].length == 0) {
        this.message = "No orders Yet!";
      }
      else {
        this.message = null;
        this.orders = resp["orders"];
        console.log(this.orders);
        this.orders.forEach((o) => {
          o.installments.forEach((i) => {
            if (i.payment != null) {
              i.payment.productName = o.product.productName;
              // i.payment.paymentDate = formatDate(i.payment.paymentDate,"'dd/MM/yyyy","en-US");
               this.transactions.push(i.payment); }
          });
        });
      }

    });
  }
}

export class Order {
  orderId: number;
  product: Product;
  amountPaid: number;
  tenurePeriod: number;
  purchaseDate: Date;
  amountBalance: number;
  orderStatus: string;
  monthlyEMIAmount: number;
  installments: Array<Installment>;
  emimonthsPaid: number;

}

export class Product {
  productId: number;// 68,
  productName: String;// "Realme 6 pro",
  productDescription: String;// "128 gb with excellent battery",
  productCategory: String;// "Mobile",
  productPrice: number;// 14999,
  productImage: String;// null
  // constructor(public id: number,
  //   public name: string,
  //   public description: string,
  //   public price: number,
  //   public imgUrl: string,
  //   public date: string) { }
}

export class Installment {
  installmentId: number;// 100,
  installmentNo: number;// 1,
  dueDate: Date;// "2021-05-05",
  installmentStatus: string;// "Active",
  payment: Payment;// null
}

export class Payment {
  productName: String;
  fineAmount: number;
  paymentAmount: number;
  paymentDate: Date;
  paymentId: number;
}