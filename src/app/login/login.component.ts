import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/login/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = ''
  password = ''

  constructor(public service: AuthenticateService) { }

  ngOnInit(): void {
  }

  loginHandler() {
    this.service.authenticate(this.username, this.password)
  }
}
