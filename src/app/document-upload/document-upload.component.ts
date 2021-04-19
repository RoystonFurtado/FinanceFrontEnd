import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.css']
})
export class DocumentUploadComponent {

  constructor(private registerService:RegisterService,
    private router:Router){};

  userId:string;
  aadharCard:File;
  panCard:File;
  cancelledCheque:File;
  profilePic:File;

  onFileChange(event) {
    console.log("File Change Event");
    //console.log(event.target.name);
    if(event.target.name==="aadharCard")
      this.aadharCard=event.target.files[0];
    else if(event.target.name==="panCard")
      this.panCard=event.target.files[0];
    else if(event.target.name==="cancelledCheque")
      this.cancelledCheque=event.target.files[0];
    else if(event.target.name==="profilePic")
      this.profilePic=event.target.files[0];
  }


  fileUpload(){
    this.userId=this.registerService.userId;
    let formData: FormData = new FormData();
    formData.append('userId', this.userId);
    formData.append('aadharCard',this.aadharCard);
    formData.append('panCard',this.panCard);
    formData.append('cancelledCheque',this.cancelledCheque);
    formData.append('profilePic', this.profilePic); 
    this.registerService.documentsUpload(formData).subscribe(response=> {
      alert(JSON.stringify(response));
    });
    // console.log(this.userId);
    // console.log(this.aadharCard);
    // console.log(this.panCard);
    // console.log(this.cancelledCheque);
    // console.log(this.profilePic);

  }

}
