import { CartComponent } from './../cart/cart.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number
  ) { }
}

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})

export class ListProductsComponent implements OnInit {

  products = [
    new Product(1,'Burger',200)
  ]

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  add(s: number, sname: string, sprice: number) {
    this.products.push(new Product(s,sname,sprice))
  }

  addToCart(id: number, name: string, price: number) {
  }

  cart() {
    this.router.navigate(['cart'])
  }
}
