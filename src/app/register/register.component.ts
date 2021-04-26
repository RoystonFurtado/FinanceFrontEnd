import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit{

  @ViewChild('myRegistrationForm',{static:false}) public MyForm: NgForm;

  constructor(private router:Router,
              private registerService:RegisterService,
              private navbar:MainService){};

  user:User;
  confirmPassword:string;
  cardType:string;
  cardTypeError:boolean;

  passError:boolean;
  ConPassError:string;
  EmailError:string;
  CardError:string;
  PhoneError:string;
  AddressError:string;
  ageLimit:string;

  cardTypes: string[] = ['Gold','Titanium'];

  ngOnInit(): void {
    if(sessionStorage.getItem("userId")===null) {
      this.navbar.showDashboardBtn=false;
      this.navbar.showLogoutBtn=false;
      this.navbar.showLoginBtn=true;
      this.navbar.showRegisterBtn=false;
      this.navbar.showProductBtn=true;
      this.navbar.showOrderHistoryBtn=false;
    }
    else {
      this.redirectToDashboard();
    }
    this.user=new User();
    this.user.emiCard=new emiCard();
    let today=new Date();
    let date=(today.getDate()<10)?"0"+today.getDate():today.getDate();
    let month=((today.getMonth()+1)<10)?"0"+(today.getMonth()+1):(today.getMonth()+1);
    let year=today.getFullYear()-21;
    this.ageLimit=year+'-'+month+'-'+date;
  }

  redirectToDashboard() {
    this.router.navigateByUrl('/dashboard');
  }

  onRadioChange() {
    this.cardTypeError=false;
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  register() {
    if(this.user.emiCard.cardType===undefined)
      this.cardTypeError=true;
   else if(this.confirmPassword!==this.user.password)
      this.passError=true;
   else {
     if(this.MyForm.valid) {
       console.log("Inside");
        this.registerService.register(this.user).subscribe(response=>{
          if(response['status']===true) {
            this.registerService.userId=response["registeredUserId"];
            this.router.navigateByUrl('/login');
          }
          else
            alert(response['message']);
        });
     }
   } 
  }

}
export class User{
  constructor(public userName?:string,
              public mobileNo?:Number,
              public emailId?:string,
              public address?:string,
              public password?:string,
              public dob?:string,
              public emiCard?:emiCard,
              public profileStatus?:string,
              public aadharCard?:string,
              public panCard?:string,
              public cancelledCheque ?:string){}
              
}
export class emiCard{
  constructor(public cardType?:string){}
}