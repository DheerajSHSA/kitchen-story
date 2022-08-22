import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAdmin: boolean = ((sessionStorage.getItem('isAdmin')) === 'true')
  isLoggedIn: boolean = ((sessionStorage.getItem('isLoggedIn')) === 'true')

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  navigateLogin() {
    this.router.navigate(['login'])
  }

  logout() {
    if(confirm('Logged out Successfully'))
    {
    sessionStorage.removeItem('isAdmin')
    sessionStorage.removeItem('isLoggedIn')
    this.router.navigate(['login'])
    }
  }
}
