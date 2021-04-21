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
  image:string;
  category:string;
  constructor( private route: ActivatedRoute,private router:Router,private productService:ProductService){
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log("vivek"+this.id);
  });

  this.productService.fetchProductDetails(this.id).subscribe(response=>{

    this.description=response['productDescription'];
    console.log(this.description);
    this.name=response['productName'];
    this.price=response['productPrice'];
    this.image=response['productImage'];
    this.category=response['productCategory'];
    
  
    this.product= new Product(this.id,this.name,this.description,this.price,this.category,this.image);
    console.log(this.product);
  });

  };
 
}

 




