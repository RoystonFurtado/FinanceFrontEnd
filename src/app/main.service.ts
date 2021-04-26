import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  showLoginBtn:boolean;
  showRegisterBtn:boolean;
  showLogoutBtn:boolean;
  showDashboardBtn:boolean=true;
  showProductBtn:boolean;

}
