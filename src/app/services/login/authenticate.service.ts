import { ListProductsComponent } from './../../list-products/list-products.component';
import { Router } from '@angular/router';
import { HeaderComponent } from './../../header/header.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(
    public router: Router,
    public products: ListProductsComponent
  ) { }


  authenticate(username: any, password: any) {
    if (username === 'admin' && password === 'admin') {
      this.router.navigate(['products'])
      sessionStorage.setItem('isAdmin', 'true')
      sessionStorage.setItem('isLoggedIn', 'true')
    }
    else if (username === 'user' && password === 'user') {
      this.router.navigate(['products'])
      sessionStorage.setItem('isAdmin', 'false')
      sessionStorage.setItem('isLoggedIn', 'true')
    }
    else {
      alert("Incorrect Username or Password")
    }
  }
}
