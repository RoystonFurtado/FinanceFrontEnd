import { Component, OnInit } from '@angular/core';
import { Entity_profileStatus, Entity_rejectedMessage, ProfileStatus_Permanently_Deativated } from '../app.component';
import { ProfileStatus_Rejected } from '../app.component';
import { ProfileStatus_Pending } from '../app.component';
import { ProfileStatus_Accepted } from '../app.component';


@Component({
  selector: 'app-account-warning',
  templateUrl: './account-warning.component.html',
  styleUrls: ['./account-warning.component.css']
})
export class AccountWarningComponent  {

  profileStatus:string;
  ProfileStatus_Rejected:string = ProfileStatus_Rejected;
  ProfileStatus_Pending:string = ProfileStatus_Pending;
  ProfileStatus_Permanently_Deativated:string = ProfileStatus_Permanently_Deativated;
  ProfileStatus_Accepted:string = ProfileStatus_Accepted;

  reason:string

  constructor() {
    this.profileStatus=sessionStorage.getItem(Entity_profileStatus);
    this.reason=sessionStorage.getItem(Entity_rejectedMessage);
    console.log(this.profileStatus== this.ProfileStatus_Permanently_Deativated);
   }

 

}
