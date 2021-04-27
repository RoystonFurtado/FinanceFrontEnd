import { Component, Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import {  OrderDetails, OrderSummaryDetails } from '../product-description/product-description.component';
import {PlaceOrderService} from '../place-order.service';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
@Directive({
  selector: '[OrderDisappear]'
})
export class OrderDisappearDirective {
  @Output() OrderDisappear = new EventEmitter<MouseEvent>();
  constructor(private elementRef: ElementRef) { }
  @HostListener('document:click', ['$event']) onClickOutside(event: MouseEvent) { //$event 
    const targetElement = event.target as HTMLElement; //Exactly where the user clicked  stored in target element
    // const orderBtn=document.getElementsByClassName('description-btn')[0]; //Element Reference
    //const editbtn=document.getElementsByClassName('contacts-container')[0];
    // const closebtn=document.getElementsByClassName('close-btn')[0];
    // const cancelbtn=document.getElementsByClassName('cancel-btn')[0];
    if ((!(this.elementRef.nativeElement.contains(targetElement))))
      this.OrderDisappear.emit(event);
  }
}


@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})

export class OrderSummaryComponent implements OnInit{
  orderDetails:OrderDetails;
  orderOverviewPopup:boolean=false;
  orderStatus:boolean=false;
  orderStatusMessage:string;
  user:UserDetails;
  userId:string;
  id:number;
  @Input() od:OrderSummaryDetails;
  constructor(private placeOrderService:PlaceOrderService,private router:Router,private navbar:MainService) {
    this.userId=sessionStorage.getItem("userId");
    if(this.userId!="" && this.userId!=null){
    this.id=parseInt(sessionStorage.getItem("userId"));
    this.placeOrderService.getUserDetails(this.userId).subscribe(response=>{
      this.user=new UserDetails();
      this.user.userName=response["userName"];
      this.user.cardBalance=response["cardBalance"];
      this.user.cardCreditUsed=response["cardCreditUsed"];
      this.user.cardLimit=response["cardLimit"];
      this.user.cardType=response["cardType"];
      this.user.emailId=response["emailId"];
      this.user.address=response["address"];
      this.user.cardExpiryDate=response["cardExpiryDate"];
  });}
  else
  {
    this.router.navigateByUrl('/login');
  }
  }

  ngOnInit(): void {
    if(sessionStorage.getItem("userId")!==null) {
      this.navbar.showDashboardBtn=true;
      this.navbar.showLogoutBtn=true;
      this.navbar.showLoginBtn=false;
      this.navbar.showRegisterBtn=false;
      this.navbar.showProductBtn=true;
      this.navbar.showOrderHistoryBtn=true;
    }
    else {
      this.redirectToHome();   
    }
  }

  showOrderPopup(){
    this.orderOverviewPopup=true;
   }
  
  hideOrderPopup(){
    this.orderOverviewPopup=false;
    this.router.navigateByUrl('/product-listing');
   }
  redirectToOrderPlacement(){
    this.orderDetails=new OrderDetails(this.id,this.od.productId,this.od.tenurePeriod);
    this.placeOrderService.orderData(this.orderDetails).subscribe(response=>{
         this.orderStatusMessage=response['message'];
  })
    this.showOrderPopup();
    this.orderStatus=false;
  }

  redirectToHome() {
    this.router.navigateByUrl('home');
  }
  
}

export class UserDetails {
   public userName:string;
   public cardBalance:number;
   public cardCreditUsed:number;
   public cardLimit:number;
   public cardType:string;
   public emailId:string;
   public address:string;
   public cardExpiryDate:Date;
}
