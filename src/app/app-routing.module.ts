import { ChangePasswordComponent } from './change-password/change-password.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { OrdersummaryComponent } from './ordersummary/ordersummary.component';
import { CartComponent } from './cart/cart.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ListProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'ordersummary', component: OrdersummaryComponent },
  { path: 'payment', component: PaymentGatewayComponent },
  { path: 'changepassword', component: ChangePasswordComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
