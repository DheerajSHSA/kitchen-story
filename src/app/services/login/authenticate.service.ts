import { ListProductsComponent } from './../../list-products/list-products.component';
import { Router } from '@angular/router';
import { HeaderComponent } from './../../header/header.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  map = new Map<string, string>([
    ['admin', 'admin']
  ]);

  constructor(
    public router: Router
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

  changePassword(oldPassword: string, newPassword: string)
  {
    if(oldPassword === this.map.get('admin'))
    {
      this.map.set('admin', newPassword)
      alert('Password Changed')
    }
    else
    {
      alert('Current Password is not correct')
    }
  }
}
