import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { baseUrl } from '../app.component';
import { Product } from '../product/product.component';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

   

  constructor(private router:Router, private http: HttpClient){
    this.getProducts();
  };
products: Array<Product>;
  // productName:string="IPhone8";
  // productDescription:string="This is an expensive phone.";
  // productPrice:Number=80000;
  // productImageUrl:string="assets/iphone8.jfif";

  redirectToRegister() {
    this.router.navigateByUrl('/register');
  }

  redirectToLogin() {
    this.router.navigateByUrl('/login');
  }
  redirectToDescription(id:any){
    sessionStorage.setItem("productId",id);
    this.router.navigateByUrl('/product-description');
  }
  redirectToProductListing(){
    this.router.navigateByUrl('/product-listing');
  }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

  getProducts() {
    this.http.get(baseUrl+"/productsByLimit?limit=4").subscribe(data =>  {
      this.products=data as Array<Product> 
      console.log(data);
    }) 
  }

}
