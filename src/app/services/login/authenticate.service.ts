import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  authenticate(username: any, password: any) {
    if (username === 'admin' && password === 'admin') {
      console.log("Admin")
    }
    else if (username === 'user' && password === 'user') {
      console.log("User")
    }
    else {
      console.log("Incorrect Username or Password")
    }
  }
}
