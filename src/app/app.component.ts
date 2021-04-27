import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showNav: boolean = false;
  showAppBar: boolean = true;
  loggedIn: boolean = false;

  userName:string="User"

  routesToShowAppBar = ["/", "/dashboard", "/product-listing", "/order-history"];
  routesToShowSideNav = ["/dashboard", "/product-listing", "/order-history"];

  constructor(private router: Router) {
    router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        if(sessionStorage.getItem(Entity_UserId)!=null){
          this.userName=sessionStorage.getItem(Entity_UserName);
          this.loggedIn = true;
        }else this.loggedIn=false;
        if (this.routesToShowSideNav.find(val => val == e.url) != undefined) {
          this.showNav = true;
        }
        else {
          this.showNav = false;
        }
        if (this.routesToShowAppBar.find(val => val == e.url) != undefined) {
          this.showAppBar = true;
        }
        else {
          this.showAppBar = false;
        }
      }
    });
  }


  title = 'Finance System';
  redirectToLogin() {
    this.router.navigateByUrl('/login',);
  }
  redirectToDashboard() {
    this.router.navigateByUrl('/dashboard',);
  }
  redirectToRegister() {
    // console.log(baseUrl + this.router.url);
    this.router.navigateByUrl('/register');
  }
  logOut(){
    sessionStorage.clear();
    this.router.navigateByUrl('/');

  }
}

export var baseUrl = "http://localhost:8181";
export var Entity_UserId = "userId";
export var Entity_UserName = "userName";
export var Entity_emailId = "emailId";
export var Entity_isDocumentUploaded = "documentUploaded";
export var Entity_profileStatus = "profileStatus";
export var Entity_rejectedMessage = "rejectedMessage";
export var ProfileStatus_Accepted = "Accepted";
export var ProfileStatus_Rejected = "Rejected";
export var ProfileStatus_Permanently_Deativated = "Permanently Deactivated";
export var ProfileStatus_Pending = "Pending";


