import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { DocumentUploadComponent } from './document-upload/document-upload.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import { AdminPendingListComponent } from './admin-pending-list/admin-pending-list.component';
import { AdminAcceptedListComponent } from './admin-accepted-list/admin-accepted-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CreatePasswordComponent } from './create-password/create-password.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'dashboard',component: DashboardComponent},
  {path:'product-listing',component: ProductComponent},
  {path:'forget-password',component: ForgetPasswordComponent},
  {path:'document-upload',component: DocumentUploadComponent},
  {path:'product-description',component:ProductDescriptionComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent},
  {path:'admin-pending-list',component:AdminPendingListComponent},
  {path:'admin-accepted-list',component:AdminAcceptedListComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'order-history',component:OrderHistoryComponent},
  {path:'create-password',component:CreatePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
