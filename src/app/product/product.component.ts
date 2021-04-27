import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import {Product} from '../add-product/add-product.component';
 
import { Entity_UserId,baseUrl } from '../app.component';
import { MainService } from '../main.service';

import { ProductService } from '../product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  lth = false;
  htl = false;


  productId: number;
  products: Product[];

  ngOnInit(): void {
    if(sessionStorage.getItem("userId")===null) {
      this.navbar.showDashboardBtn=false;
      this.navbar.showLogoutBtn=false;
      this.navbar.showLoginBtn=true;
      this.navbar.showRegisterBtn=true;
      this.navbar.showProductBtn=false;
      this.navbar.showOrderHistoryBtn=false;
    }
    else {
      this.navbar.showDashboardBtn=true;
      this.navbar.showLogoutBtn=true;
      this.navbar.showLoginBtn=false;
      this.navbar.showRegisterBtn=false;
      this.navbar.showProductBtn=false;
      this.navbar.showOrderHistoryBtn=true;
    }
  }

  constructor(private productService: ProductService, private router: Router,private navbar:MainService) {
    this.fetchAllProducts();
  }

  fetchAllProducts() {

    this.productService.fetchProduct().subscribe(response => {
      this.products = response;
      console.log(this.products);
    })

  }
  fetchByCategory(productCategory: String) {
    this.productService.fetchByCategory(productCategory).subscribe(response => {
      this.products = response;
      console.log(this.products);
    })
  }
  fetchByLowToHighPrice() {
    this.productService.fetchByLowToHighPrice().subscribe(response => {
      this.products = response;
      this.lth = true;
      this.htl = false;
      console.log(this.products);
    })
  }
  
  fetchByHighToLowPrice() {
    this.productService.fetchByHighToLowPrice().subscribe(response => {
      this.lth = false;
      this.htl = true;
      this.products = response;
      console.log(this.products);
    })
  }


  redirectToDescription(id: any) {
    sessionStorage.setItem("productId", id);
    this.router.navigateByUrl('/product-description');

  }

  redirectToDashboard() {
    this.router.navigateByUrl('/dashboard');
  }
}

// }

export class Product {
  constructor(public productId?: Number,
    public productName?: string,
    public productDescription?: string,
    public productPrice?: Number,
    public productCategory?: string,
    public productImage?: string) { }
}
export class ProductImages {
  constructor(public productId?: any,
    public productImage?: File) { }
}

