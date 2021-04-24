import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entity_emailId } from '../app.component';
import { ForgetPasswordService } from '../forget-password.service';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.css']
})
export class CreatePasswordComponent {

  newPassword: string;
  newPasswordError: string;
  confirmPassword: string;
  confirmPasswordError: string;
  errorMessage: string;
  email:string;

  constructor(private forgotPasswordService: ForgetPasswordService, private router: Router) { 

    this.email = sessionStorage.getItem(Entity_emailId);
    if(this.email==null) {
      alert("Invalid session");
      this.router.navigateByUrl("/forget-password");}
  }
  validateFields() {
    var validated = false;
    if (this.newPassword == null || this.newPassword.length == 0) {
      validated = false;
      this.newPasswordError = "Password can't be empty"
    }
    else { validated = true; this.newPasswordError = null; }
    if (this.confirmPassword == null || this.confirmPassword.length == 0) {
      validated = false;
      this.confirmPasswordError = "Password can't be empty"
    }
    else { validated = true; this.confirmPasswordError = null; }
    if (this.newPassword != this.confirmPassword) {
      validated = false;
      this.confirmPasswordError = "Password doesn't match";
    }
    else { validated = true; this.confirmPasswordError = null; }

    if (validated) {
      this.forgotPasswordService.updatedPassword(this.email, this.newPassword).subscribe(data => {
        if (data != null) this.redirectToLogin();
        else this.errorMessage = "Please try again";
      });
    }

  }
  redirectToLogin() {
    this.router.navigateByUrl("/login");
  }


}
