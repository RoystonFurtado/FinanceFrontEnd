import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { baseUrl, Entity_UserId } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  userNameError: string;
  password: string;
  passwordError: string;
  statusMessage: string;
  loginType:String;
  loginError:String;

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
    if (this.username == null || this.username.length == 0) {
      this.userNameError = "User name can't be empty";
      validated = false;
    }
    else{
      this.userNameError = null;
      validated = true;
    }

    if (validated && this.password == null || this.password.length == 0) {
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
        if(this.username=="admin" && this.password=="admin"){
            this.redirectToAdminDashboard();
        }
      }
      if(this.loginType=="User"){
      this.http.post(baseUrl+"/login", { "userName": this.username, "password": this.password }).subscribe(data => {
        console.log(data);
        if (data["loggedUserId"] == 0) {
          alert(data["message"]);
        }
        else {
         sessionStorage.setItem(Entity_UserId,data["loggedUserId"]);
          this.redirectToDashboard();
        }
      }, (e) => {
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


  redirectToDashboard() {
    this.router.navigateByUrl('/dashboard');
  }
  redirectToAdminDashboard(){
    this.router.navigateByUrl('/admin-dashboard');
  }

}
