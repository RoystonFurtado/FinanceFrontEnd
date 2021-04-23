import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Product } from '../product/product.component';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent  {
  product:Product;
  id:number;
  constructor( private route: ActivatedRoute,private router:Router){
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
  });
    this.product= new Product(this.id,"iphone 11","Apple iphone 11",49900,'mobile','assets/product-images/iphone8.jfif');
  };
  }

 




