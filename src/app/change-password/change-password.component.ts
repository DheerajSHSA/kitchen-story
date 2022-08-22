import { AuthenticateService } from './../services/login/authenticate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(
    public authenticate: AuthenticateService
  ) { }

  ngOnInit(): void {
  }

  changePassword(oldPassword: string, newPassword: string)
  {
    this.authenticate.changePassword(oldPassword, newPassword)
  }
}
