import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:Product[];

  ngOnInit(): void {
    console.log(sessionStorage.getItem('UserId'));
  }

  redirectToDescription(id:any){
    this.router.navigateByUrl('/product-description?id='+id);
  }

  constructor(private router:Router) { 
  this.products= [
    new Product(383,"iphone 11","Apple iphone 11",49900,'assets/product-images/iphone8.jfif'),
    new Product(385,"S21 Ultra","Samsung",50000,'assets/product-images/samsung.jpg')
  ]} 

}
export class Product{
  constructor(public id:number,
    public name:string,
    public description:string,
    public price:number,
    public imgUrl:string) {}
}
