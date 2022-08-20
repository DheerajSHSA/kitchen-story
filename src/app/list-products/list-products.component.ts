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

  addToCart(cid: number, cname: string, cprice: number) {

  }

  cart() {
    this.router.navigate(['cart'])
  }
}
