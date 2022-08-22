import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { CartComponent } from './cart/cart.component';
import { OrdersummaryComponent } from './ordersummary/ordersummary.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { HeaderComponent } from './header/header.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagenotfoundComponent,
    ListProductsComponent,
    CartComponent,
    OrdersummaryComponent,
    PaymentGatewayComponent,
    HeaderComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [ListProductsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
