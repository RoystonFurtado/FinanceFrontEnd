import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FinanceFrontEnd';
}

export var baseUrl = "http://localhost:8181";
export var Entity_UserId = "userId"; 