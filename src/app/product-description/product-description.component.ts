import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product/product.component';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent  {
  product:Product;
  id:number;
  name:string;
  description:string;
  price:number;
  obj:any;
  constructor( private route: ActivatedRoute,private router:Router,private productService:ProductService){
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
  });

  this.productService.fetchProductDetails(385).subscribe(response=>{

    this.description=response['productDescription'];
    this.name=response['productName'];
    this.price=response['productPrice'];
    console.log(response['productImage']);
  
    this.product= new Product(this.id,this.description,this.name,this.price,'assets/product-images/iphone8.jfif');
  });
  
  };
}

 




