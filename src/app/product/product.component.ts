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

  constructor(private router:Router) {} 

}
export class Product{
  constructor(public productId:Number,
    public productName:string,
    public productDescription:string,
    public productPrice:Number,
    public productCategory:string,
    public productImage:string
    ) {}
}


