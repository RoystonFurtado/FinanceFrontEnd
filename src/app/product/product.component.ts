import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import {Product} from '../add-product/add-product.component';
 
import { Entity_UserId } from '../app.component';

import { ProductService } from '../product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
//   products:Product[];


  productId: number;
  products:Product[];

   ngOnInit(): void {
    console.log(sessionStorage.getItem(Entity_UserId));
  }

  constructor(private productService: ProductService, private router:Router) { 

  } 

  fetchAllProducts(){
   
    this.productService.fetchProduct().subscribe(response =>{
   this.products = response;
    console.log(this.products);
    })
   
  }
  fetchByCategory(productCategory: String){
    this.productService.fetchByCategory(productCategory).subscribe( response =>{
      this.products = response;
      console.log(this.products);
      })
  }
  fetchByLowToHighPrice(){
    this.productService.fetchByLowToHighPrice().subscribe( response =>{
      this.products = response;
      console.log(this.products);
      })
  }

  fetchByHighToLowPrice(){
    this.productService.fetchByHighToLowPrice().subscribe( response =>{
      this.products = response;
      console.log(this.products);
      })
  }


  redirectToDescription(id:any){
    sessionStorage.setItem("productId",id);
    this.router.navigateByUrl('/product-description');
    
  }
  redirectToDashboard() {
    this.router.navigateByUrl('/dashboard');
  }
}
 
// }

export class Product{
  constructor(public productId?:Number,
         public productName?:string,
         public productDescription?:string,
         public productPrice?:Number,
         public productCategory?:string,
         public productImage?:string){}
}
export class ProductImages{
  constructor(public productId?:any,
    public productImage?:File){}
}

