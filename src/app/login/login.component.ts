import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CompileShallowModuleMetadata } from '@angular/compiler';

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

  constructor(private router: Router, private http: HttpClient) { };

  login() {
    var validated = false;
    if (this.username == null || this.username.length == 0) {
      this.userNameError = "User name can't be empty";
      validated = false;
    }
    else {
      this.userNameError = null;
      validated = true;
    }

    if (this.password == null || this.password.length == 0) {
      this.passwordError = "Password can't be empty";
      validated = false;
    }
    else {
      this.passwordError = null;
      validated = true;
    }

    if (validated) {
      this.http.post("http://localhost:8223/login", { "userName": this.username, "password": this.password }).subscribe(data => {
        console.log(data);
        if (data["loggedUserId"] == 0) {
          alert(data["message"]);
        }
        else {
         sessionStorage.setItem("userId",data["loggedUserId"]);
          this.redirectToDashboard();
        }
      }, (e) => {
        this.statusMessage = "Please try again later";
        console.log(this.statusMessage);
        alert(this.statusMessage);
      });

           

     }
  }


  redirectToDashboard() {
    this.router.navigateByUrl('/dashboard');
  }

}
