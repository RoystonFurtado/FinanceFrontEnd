import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  productId: number;
  products:Product[];

   ngOnInit(): void {

//     this.productId = parseInt(sessionStorage.getItem('productId'));
//     this.productService.fetchProduct().subscribe(response =>{
//     this.products = response;
//     console.log(this.products);
//     })
//     console.log(sessionStorage.getItem('userId'));
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
  redirectToDescription(id:any){
    this.router.navigateByUrl('/product-description?id='+id);
  }

}

export class Product{
  constructor(public productId:number,
    public productName:string,
    public productDescription:string,
    public productCategory:string,
    public productPrice:number,
    public productImage:string) { }
}


