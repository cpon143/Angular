import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product = {
    name: 'Samsung Galaxy S10',
    description: 'camera is very good at zoom in ',
    price: 9.99,
    gst: 18,
    image: './assets/images/phone.webp'
  };
  quantity = 0;
  

  calculatePrice() {
    return (this.product.price * (1 + this.product.gst / 100)) * this.quantity;
  }

  decreaseQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  increaseQuantity() {
    this.quantity++;
  }

  changeName1(){
    this.product.name="MD MAzharul Haque";
  }
  changeName2(){
    this.product.name="Samsung Galaxy S10";
  }

  ourReviewList=[
    {
      name:'Divya',
      review:'Good Product'
    },
    {
      name:'Rahul',
      review:'Nice Product'
    },
    {
      name:'Raj',
      review:'Best Product'
    },
    {
      name:'Raj',
      review:'Best Product'
    }
  ]
  
}