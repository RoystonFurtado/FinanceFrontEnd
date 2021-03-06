import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entity_UserId } from '../app.component';
import { MainService } from '../main.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.css']
})
export class DocumentUploadComponent {

  constructor(private registerService:RegisterService,
    private router:Router,private navbar:MainService){
      this.userId =sessionStorage.getItem(Entity_UserId);
    };

    ngOnInit(): void {
      if(sessionStorage.getItem("userId")===null) {
        this.navbar.showDashboardBtn=false;
        this.navbar.showLogoutBtn=false;
        this.navbar.showLoginBtn=true;
        this.navbar.showRegisterBtn=false;
        this.navbar.showProductBtn=true;
        this.navbar.showOrderHistoryBtn=false;
      }
    }
    
    redirectToDashboard() {
      this.router.navigateByUrl('/dashboard');
    }

  userId:any;
  aadharCard:File;
  panCard:File;
  cancelledCheque:File;

  onFileChange(event) {
    console.log("File Change Event");
    //console.log(event.target.name);
    if(event.target.name==="aadharCard")
      this.aadharCard=event.target.files[0];
    else if(event.target.name==="panCard")
      this.panCard=event.target.files[0];
    else if(event.target.name==="cancelledCheque")
      this.cancelledCheque=event.target.files[0];
  }


  fileUpload(){
    this.userId=sessionStorage.getItem("userId");
    let formData: FormData = new FormData();
    this.userId=10062;
    formData.append('userId', this.userId);
    formData.append('aadharCard',this.aadharCard);
    formData.append('panCard',this.panCard);
    formData.append('cancelledCheque',this.cancelledCheque);
    this.registerService.documentsUpload(formData).subscribe(response=> {
      if(response.status===true) {
        sessionStorage.setItem(Entity_UserId,this.userId);
        this.router.navigateByUrl('/product-listing');
      }
    });
    // console.log(this.userId);
    // console.log(this.aadharCard);
    // console.log(this.panCard);
    // console.log(this.cancelledCheque);
    // console.log(this.profilePic);

  }

}
