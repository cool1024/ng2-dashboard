import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from './../../system.service';
import { LoginService } from './login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  constructor(private systemService: SystemService, private loginService: LoginService,private router:Router) { }

  ngOnInit() { }

  //login
  doLogin() {
    this.loginService.doLogin(this.loginParams).subscribe(res => {
      if (res.result) {
        this.router.navigateByUrl('/')
      }
      else {
        this.message = this.message
      }
    })
  }

  //login data
  loginParams: { email: string, password: string } = { email: "", password: "" }

  //login message
  message: string = ""

  //page config
  loginPageConfig = this.systemService.loginPageConfig

  //background color
  bgColor = this.systemService.theme.bgColor

}
