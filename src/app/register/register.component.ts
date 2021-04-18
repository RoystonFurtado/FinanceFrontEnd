import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit{

  constructor(private router:Router,
              private registerService:RegisterService){};

  user:User;
  confirmPassword:string;

  ngOnInit(): void {
    this.user=new User();
    this.user.emiCard=new emiCard();
  }

  registerUser() {
    this.registerService.register(this.user).subscribe(response=>{
      console.log("User Id-->"+response["registeredUserId"]);
      this.registerService.userId=response["registeredUserId"];
      alert(JSON.stringify(response));
    });
    this.router.navigateByUrl('/document-upload');
  }

}

export class User{
  constructor(public userName?:string,
              public mobileNo?:Number,
              public emailId?:string,
              public address?:string,
              public password?:string,
              public dob?:string,
              public emiCard?:emiCard){}
              
}
export class emiCard{
  constructor(public cardType?:string){}
}