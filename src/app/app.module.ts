import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent, DisappearDirective, ReplaceNullWithTextPipe } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { DocumentUploadComponent } from './document-upload/document-upload.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    ProductComponent,
    NavbarComponent,
    ForgetPasswordComponent,
    DocumentUploadComponent,
    ProductDescriptionComponent,
    OrderHistoryComponent,
    DisappearDirective,
    ReplaceNullWithTextPipe,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
