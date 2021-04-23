import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDashboardService } from '../admin-dashboard.service';
import { User } from '../register/register.component';

@Component({
  selector: 'app-admin-accepted-list',
  templateUrl: './admin-accepted-list.component.html',
  styleUrls: ['./admin-accepted-list.component.css']
})
export class AdminAcceptedListComponent implements OnInit {

  users:User[];
  constructor(private adminDashboardService:AdminDashboardService,
    private router:Router) { }

  ngOnInit(): void {

      this.adminDashboardService.fetchUsers().subscribe(Response => {
        this.users=Response;
        console.log(Response);
      });
    }

  

}
