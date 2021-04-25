
import { getLocaleDateFormat } from '@angular/common';
import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import {Order} from '../order-history/order-history.component';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product/product.component';
import { DatePipe } from '@angular/common';
import { ActiveOrder } from '../dashboard/dashboard.component';


@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css'],
  providers: [DatePipe]
})
export class ProductDescriptionComponent {
 validated:boolean;
 emiError:string;
  product:Product;
  id:number;
  userId:number;
  name:string;
  description:string;
  price:number;
  image:string;
  category:string;
  myDate:string;
  date:Date;
  tenurePeriod:number;
  amount:number;
  orderOverviewPopup:boolean;
  order:Order;
  orderSummaryDetails:OrderSummaryDetails;
  productOrderStatus:string="Active";
  loadOrderComponent:boolean=false;
  visible:boolean=true;


  constructor( private route: ActivatedRoute,private router:Router,
    private productService:ProductService,
     private datePipe: DatePipe){
     this.id=parseInt(sessionStorage.getItem("productId"));
     this.userId=parseInt(sessionStorage.getItem("userId"));


 this.date=new Date();
  this.myDate = this.datePipe.transform(this.date, 'yyyy-MM-dd');
 
  this.productService.fetchProductDetails(this.id).subscribe(response=>{

    this.description=response['productDescription'];
    this.name=response['productName'];
    this.price=response['productPrice'];
    this.image=response['productImage'];
    this.category=response['productCategory'];
    this.product= new Product(this.id,this.name,this.description,this.price,this.category,this.image);
    
  });
  };

  buy(){
    if(this.validated){

    }
      else{
      this.emiError="Select the tenure period";
      }
    }


loadOrderSummary(){
  this.amount=Math.round(this.price/this.tenurePeriod);
 this.orderSummaryDetails =new OrderSummaryDetails(this.userId,this.id,this.tenurePeriod,this.amount,this.myDate,this.price);
 this.loadOrderComponent=true;
 this.visible=false;
}



  }

  export class OrderDetails{
    constructor(
          public userId?:number,
           public productId?:number,
           public tenurePeriod?:number
           ){}
  }

  
  export class OrderSummaryDetails{
    constructor(
          public userId?:number,
           public productId?:number,
           public tenurePeriod?:number,
           public amount?:number,
           public myDate?:string,
           public productPrice?:number


           ){}
  }
  






 




