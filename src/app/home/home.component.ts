import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { baseUrl } from '../app.component';
import { MainService } from '../main.service';
import { Product } from '../product/product.component';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{ 

  constructor(private router:Router, private http: HttpClient,private navbar:MainService){
    this.getProducts();
  };

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
    this.router.navigateByUrl('/product-description?id='+id);
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
