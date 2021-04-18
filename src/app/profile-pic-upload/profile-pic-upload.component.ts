import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-profile-pic-upload',
  templateUrl: './profile-pic-upload.component.html',
  styleUrls: ['./profile-pic-upload.component.css']
})
export class ProfilePicUploadComponent {

  constructor(private registerService:RegisterService,
    private router:Router){};

    profilePic:string;

    register() {
      this.registerService.user.profilePic=this.profilePic;
      //console.log(this.registerService.user);
      this.registerService.register().subscribe(response =>{
        alert(JSON.stringify(response));
       })
      
      

    }

}
