import { Component, OnInit } from '@angular/core';
import { SystemService } from './../../system.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private systemService: SystemService) { }

  ngOnInit() { }

  //login
  doLogin() {
    this.message = "wrong password or account"
  }

  //login data
  loginParams: { account: string, password: string } = { account: "", password: "" }

  //login message
  message: string = ""

  //background color
  bgColor = this.systemService.theme.bgColor
  bgImage = this.systemService.theme.bgImage
}
