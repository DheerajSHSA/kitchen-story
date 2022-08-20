import { Router } from '@angular/router';
import { ListProductsComponent, Product } from './../list-products/list-products.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cart = [ new Product(0, "Burger",2), new Product(1, "Pizza", 5)]
  total: number = 0;
  constructor( public listcomponent: ListProductsComponent,
    public router: Router) { }

  ngOnInit(): void {
    this.cart.forEach(element => {
      this.total = this.total + element.price;
    });
  }

  orderSummary()
  {
    this.router.navigate(['ordersummary'])
  }
}
