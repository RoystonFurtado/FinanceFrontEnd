import { getLocaleDateFormat } from '@angular/common';
import { Component, Directive, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product/product.component';
import { DatePipe } from '@angular/common';


@Directive({
  selector:'[OrderDisappear]'
})
export class OrderDisappearDirective {
  @Output() OrderDisappear=new EventEmitter<MouseEvent>();
  constructor(private elementRef:ElementRef) {}
  @HostListener('document:click',['$event']) onClickOutside(event:MouseEvent) { //$event 
    const targetElement=event.target as HTMLElement; //Exactly where the user clicked  stored in target element
   // const orderBtn=document.getElementsByClassName('description-btn')[0]; //Element Reference
    //const editbtn=document.getElementsByClassName('contacts-container')[0];
   // const closebtn=document.getElementsByClassName('close-btn')[0];
    // const cancelbtn=document.getElementsByClassName('cancel-btn')[0];
    if( (!(this.elementRef.nativeElement.contains(targetElement))))
      this.OrderDisappear.emit(event);
  }
}

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css'],
  providers: [DatePipe]
})
export class ProductDescriptionComponent  {
 validated:boolean;
 emiError:string;
  product:Product;
  id:number;
  name:string;
  description:string;
  price:number;
  image:string;
  category:string;
  myDate:string;
  date:Date;
  tenurePeriod:number;
  amount:string;
  orderOverviewPopup:boolean;

  constructor( private route: ActivatedRoute,private router:Router,private productService:ProductService,private datePipe: DatePipe){
    this.route.queryParams.subscribe(params => {
      this.id = params['id']; 
  });

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

 hideOrderPopup(){
  this.orderOverviewPopup=false;
  console.log("Hide")


 }

 showOrderPopup(){
  this.orderOverviewPopup=true;
  console.log("Show");

 }
    }



 




