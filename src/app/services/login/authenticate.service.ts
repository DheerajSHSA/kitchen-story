import { HeaderComponent } from './../../header/header.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(public header: HeaderComponent) { }

  authenticate(username: any, password: any) {
    if (username === 'admin' && password === 'admin') {
      this.header.isAdmin = true
      this.header.isLoggedIn = true
    }
    else if (username === 'user' && password === 'user') {
      this.header.isAdmin = false
      this.header.isLoggedIn = true
    }
    else {
      alert("Incorrect Username or Password")
    }
  }
}
