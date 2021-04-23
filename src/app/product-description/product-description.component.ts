import { Variable } from '@angular/compiler/src/render3/r3_ast';
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
 validated:boolean;
 emiError:string;
  order:Order;
  product:Product;
  id:number;
  name:string;
  description:string;
  price:number;
  image:string;
  category:string;
  tenure:string;
  constructor( private route: ActivatedRoute,private router:Router,private productService:ProductService){
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      
  });

  this.productService.fetchProductDetails(this.id).subscribe(response=>{

    this.description=response['productDescription'];
    this.name=response['productName'];
    this.price=response['productPrice'];
    this.image=response['productImage'];
    this.category=response['productCategory'];
    
  
   //this.product= new Product(this.id,this.description,this.name,this.price,this.image,this.category);
    console.log(this.product);
  });

  };

  buy(){
    if(this.validated){

     
      }
      else{
      this.emiError="Select the tenure period";
      }
    }
 
    }

 

export class Order{
  constructor(public amountPaid: Number,
              public tenurePeriod:Number,
              public purchaseDate:Date,
              public amountBalance:Number,
              public EMIMonthsPaid:Number,
              public orderStatus:string,
              public monthlyEMIAmount:Number){}
              
}

 




