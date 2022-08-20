import { ListProductsComponent } from './../list-products/list-products.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items:any = []

  constructor( public listcomponent: ListProductsComponent) { }

  ngOnInit(): void {

  }

}
