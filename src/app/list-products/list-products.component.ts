import { CartComponent } from './../cart/cart.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class Product {
  constructor(
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

  isAdmin: boolean = ((sessionStorage.getItem('isAdmin')) === 'true')
  isLoggedIn: boolean = ((sessionStorage.getItem('isLoggedIn')) === 'true')
  pname = ''
  price = 0
  searchText:any;

  products = [
    new Product('Burger', 3)
  ]

  constructor(public router: Router) { }

  ngOnInit(): void {
    console.log(this.isAdmin)
    console.log(this.isLoggedIn)
  }

  add(pname: string = this.pname, price: number = this.price) {
    this.products.push(new Product(pname, price))
  }

  cart() {
    this.router.navigate(['cart'])
  }
}
