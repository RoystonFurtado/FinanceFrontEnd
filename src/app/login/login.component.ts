import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { baseUrl, Entity_isDocumentUploaded, Entity_profileStatus as Entity_profileStatus, Entity_rejectedMessage, Entity_UserId, Entity_UserName } from '../app.component';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

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

  constructor(private router: Router, private http: HttpClient) { };

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
        if(!data[Entity_isDocumentUploaded]){
          sessionStorage.setItem(Entity_UserId,data["loggedUserId"]);
          sessionStorage.setItem(Entity_UserName,data["userName"]);
          sessionStorage.setItem(Entity_profileStatus,data["profileStatus"]);
          sessionStorage.setItem(Entity_rejectedMessage,data["rejectedMessage"]);
          this.redirectToDocumentsUpload();
        }
        else {
         sessionStorage.setItem(Entity_UserId,data["loggedUserId"]);
         sessionStorage.setItem(Entity_UserName,data["userName"]);
         sessionStorage.setItem(Entity_profileStatus,data["profileStatus"]);
         sessionStorage.setItem(Entity_rejectedMessage,data["rejectedMessage"]);
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

redirectToDocumentsUpload(){  
  this.router.navigateByUrl('/document-upload');
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

}


