import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDashboardService } from '../admin-dashboard.service';
import { Product, ProductImages } from '../product/product.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  constructor(private router:Router,
    private adminDashboardService:AdminDashboardService){};
    

image:File;
productImages:ProductImages;
NameError:string;
PriceError:string;
DescError:string;
CategoryError:string;
product:Product;
onFileChange(event) {
  console.log("File Change Event");
  //console.log(event.target.name);
    this.image=event.target.files[0];
}

ngOnInit(): void {
  this.product=new Product();
this.productImages=new ProductImages();


}

// insertProduct() {
//   this.product.productImage="jvdkj";
//   this.product.productId=525;
//   this.productImages.productImage=this.image;
//   console.log(this.product);
//   console.log(this.image);
//   this.adminDashboardService.addProduct(this.productImages).subscribe();
//   this.router.navigateByUrl('/admin-dashboard');
// }

insertProduct() {
  this.productImages.productImage=this.image;
  this.productImages.productId=284;
  // console.log(this.product);
  // console.log(this.image);
  let formData: FormData = new FormData();
    
    // formData.append('productName', this.productImages.productName);
    // formData.append('productDescription', this.productImages.productDescription);
    // formData.append('productCategory', this.productImages.productCategory);
    // formData.append('productPrice', this.productImages.productPrice);
    
  this.adminDashboardService.addProduct(this.product).subscribe(response=>{
    console.log(response);
    // this.productImages.productId=281;
  });
  console.log(this.productImages.productId);
  formData.append('productId', "302");
  formData.append('productImage', this.image);
  console.log(formData);
  this.adminDashboardService.addProductImage(formData).subscribe();
  this.router.navigateByUrl('/admin-dashboard');
}


}






