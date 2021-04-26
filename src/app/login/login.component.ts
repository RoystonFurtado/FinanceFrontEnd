import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { baseUrl, Entity_profileStatus as Entity_profileStatus, Entity_UserId, Entity_UserName } from '../app.component';
import { FormControl, Validators } from '@angular/forms';
import { MainService } from '../main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  emailError: string;
  password: string;
  passwordError: string;
  statusMessage: string;
  loginType:String ="User";
  loginError:String;
  hide:boolean = true;
  redirectToLogin: any;
  loginData:string;

  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,`
  // ]);

  constructor(private router: Router, private http: HttpClient,private navbar:MainService) { };

  ngOnInit(): void {
    if(sessionStorage.getItem("userId")===null) {
      this.navbar.showDashboardBtn=false;
      this.navbar.showLogoutBtn=false;
      this.navbar.showLoginBtn=false;
      this.navbar.showRegisterBtn=true;
      this.navbar.showProductBtn=true;
      this.navbar.showOrderHistoryBtn=false;
    }
    else {
      this.redirectToDashboard();
    }
  }

  login() {
    var validated = false;
    if (this.loginType == null && validated) {
      this.loginError = "Choose the login type";
      validated = false;
    }
    else{
      this.loginError = null;
      validated = true;
    }
    if (this.email == null || this.email == undefined || this.email.length == 0) {
      this.emailError = "Email can't be empty";
      validated = false;
    }
    else{
      this.emailError = null;
      validated = true;
    }

    if (this.password == null || this.password == undefined || this.password.length == 0) {
      this.passwordError = "Password can't be empty";
      validated = false;
    }
    else {
      this.passwordError = null;
      validated = true;
    }

    if (validated) {
      console.log()
      if(this.loginType=="Admin"){
        if(this.email=="admin" && this.password=="admin"){
          sessionStorage.setItem("admin",'admin');
            this.redirectToAdminDashboard();
        }
      }
      if(this.loginType=="User"){
      this.http.post(baseUrl+"/login", { "emailId": this.email, "password": this.password }).subscribe(data => {
        console.log(data);
        this.loginData=data as string;
        if (data["loggedUserId"] == 0) {
          alert(data["message"]);
        }
        else {
         sessionStorage.setItem(Entity_UserId,data["loggedUserId"]);
         sessionStorage.setItem(Entity_UserName,data["userName"]);
         sessionStorage.setItem(Entity_profileStatus,data["profileStatus"]);
          this.redirectToProductListing();
        }
       
      }, 
      (e) => {
        this.statusMessage = "Please try again later";
        console.log(this.statusMessage);
        alert(this.statusMessage);
      });

      // console.log(this.username);
      // console.log(this.password);
      // if(this.username == "sonali" && this.password=="123"){
      //   this.router.navigateByUrl("/dashboard");
      // }
     
    }
  }
}

logout() {
  // remove user from local storage and set current user to null
  sessionStorage.removeItem(Entity_UserId); //,this.loginData["loggedUserId"]
  this.redirectToLogin();
}

  redirectToProductPage() {
    this.router.navigateByUrl('/product-listing');
  }

  redirectToProductListing() {
    this.router.navigateByUrl('/product-listing');
  }
  redirectToAdminDashboard(){
    this.router.navigateByUrl('/admin-dashboard');
  }
  redirectToDashboard() {
    this.router.navigateByUrl('/dashboard');
  }

}


