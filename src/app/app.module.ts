import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent, DisappearDirective } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { DocumentUploadComponent } from './document-upload/document-upload.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminPendingListComponent } from './admin-pending-list/admin-pending-list.component';
import { AdminAcceptedListComponent } from './admin-accepted-list/admin-accepted-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { CreatePasswordComponent } from './create-password/create-password.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountWarningComponent } from './account-warning/account-warning.component';
import { FooterComponent } from './footer/footer.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { QrCodeComponent } from './qr-code/qr-code.component'
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
  

//Material Components
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'
import { MatGridListModule} from '@angular/material/grid-list';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';

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
    AdminDashboardComponent,
    AdminPendingListComponent,
    AdminAcceptedListComponent,
    AddProductComponent,
    ProductDescriptionComponent,
    OrderHistoryComponent,
    DisappearDirective,
    AdminDashboardComponent,
    CreatePasswordComponent,
    AccountWarningComponent,
    FooterComponent,
    AppBarComponent,
    QrCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,  
    MatFormFieldModule,
    MatInputModule,    
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    NgxQRCodeModule,
    ShareButtonsModule,
    ShareIconsModule,
    MatProgressSpinnerModule,
  ],
  exports:[
    FormsModule,
    MatFormFieldModule,    
    MatInputModule,    
    BrowserAnimationsModule,
    MatButtonModule,  
    NgxQRCodeModule,
    ShareButtonsModule,
    ShareIconsModule,
    MatProgressSpinnerModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
