import { Router } from '@angular/router';
import { ListProductsComponent, Product } from './../list-products/list-products.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordersummary',
  templateUrl: './ordersummary.component.html',
  styleUrls: ['./ordersummary.component.css']
})
export class OrdersummaryComponent implements OnInit {

  public cart = [new Product(0, "Burger", 2), new Product(1, "Pizza", 5)]
  total: number = 0;
  constructor(public listcomponent: ListProductsComponent,
    public router: Router) { }

  ngOnInit(): void {
    this.cart.forEach(element => {
      this.total = this.total + element.price;
    });
  }

  toPay()
  {
    this.router.navigate(['payment'])
  }
}
