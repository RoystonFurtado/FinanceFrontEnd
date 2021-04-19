import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[];

  ngOnInit(): void {
    console.log(sessionStorage.getItem('userId'));
  }

  constructor() { 
  this.products= [
    new Product(111,"iphone 11","Apple iphone 11",49900,'assets/product-images/iphone8.jfif'),
    new Product(222,"S21 Ultra","Samsung",149900,'assets/product-images/samsung.jpg'),
    new Product(333,"maczbook","Apple mackbook",99900,'assets/product-images/appleMacBook.jpg'),
    new Product(444,"Rockers 555 pro","Bluetooth earphones",1650,'assets/product-images/rockerz.jpg'),
    new Product(555,"GoldTech TG113 Super Bass","Bluetooth speaker",3500,'assets/product-images/speaker.jpg')
  ]}

}

export class Product{
  constructor(public id:number,
    public name:string,
    public description:string,
    public price:number,
    public imgUrl:string) { }
}
