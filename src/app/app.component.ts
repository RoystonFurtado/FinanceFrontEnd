import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
}

export var baseUrl = "http://localhost:8188/";
export var Entity_UserId = "userId"; 
export var Entity_emailId = "emailId"; 
export var Entity_profileStatus = "profileStatus"; 
export var ProfileStatus_Accepted = "Accepted"; 
export var ProfileStatus_Rejected = "Rejected"; 
export var ProfileStatus_Pending = "Pending"; 

