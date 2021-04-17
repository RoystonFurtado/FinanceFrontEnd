import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentUploadComponent } from './document-upload/document-upload.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProfilePicUploadComponent } from './profile-pic-upload/profile-pic-upload.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'dashboard',component: DashboardComponent},
  {path:'product-listing',component: ProductComponent},
  {path:'document-upload',component: DocumentUploadComponent},
  {path:'profile-pic-upload',component: ProfilePicUploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
