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

  aadharCard:string;
  panCard:string;
  cancelledCheque:string;

  documentUpload(){
    this.registerService.user.aadharCard=this.aadharCard;
    this.registerService.user.panCard=this.panCard;
    this.registerService.user.cancelledCheque=this.cancelledCheque;
    this.router.navigateByUrl('/profile-pic-upload');
  }

}
