import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { CartComponent } from './cart/cart.component';
import { OrdersummaryComponent } from './ordersummary/ordersummary.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagenotfoundComponent,
    ListProductsComponent,
    CartComponent,
    OrdersummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ListProductsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
