import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDashboardService } from '../admin-dashboard.service';
import { MainService } from '../main.service';
import { User } from '../register/register.component';

@Component({
  selector: 'app-admin-accepted-list',
  templateUrl: './admin-accepted-list.component.html',
  styleUrls: ['./admin-accepted-list.component.css']
})
export class AdminAcceptedListComponent implements OnInit {

  users:User[];
  constructor(private adminDashboardService:AdminDashboardService,
    private router:Router,private navbar:MainService) { }
    userName:string;
    user:User;
    users1:User[];
    
    displayAll:boolean=true;

  ngOnInit(): void {

    this.navbar.showDashboardBtn=false;
      this.navbar.showLogoutBtn=true;
      this.navbar.showLoginBtn=false;
      this.navbar.showRegisterBtn=false;
      this.navbar.showProductBtn=false;
      this.navbar.showOrderHistoryBtn=false;

      this.adminDashboardService.fetchUsers().subscribe(Response => {
        this.users=Response;
        console.log(Response);
      });
    }
    display(){
      this.adminDashboardService.fetchAcceptedUser(this.userName).subscribe(response =>{
        this.users1=response;
        this.displayAll=false;
      })
    }
    view(user:User){
      sessionStorage.setItem('userName',user.userName);
      console.log(sessionStorage.getItem("userName"));
      this.router.navigateByUrl("verify-documents");

    }

  

}
