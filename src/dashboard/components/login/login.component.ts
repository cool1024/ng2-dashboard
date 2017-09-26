import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from './../../system.service';
import { LoginService } from './login.service'
import { AuthService } from './../../services/auth.service'
import { LoginPageConfig } from './../../../config/login';
import { AuthHeaders } from './../../../config/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private systemService: SystemService, private loginService: LoginService, private router: Router) { }

  ngOnInit() { }

  //login
  doLogin() {
    this.loginService.doLogin(this.loginParams).subscribe(res => {
      if (res.result) {
        //登入成功后设置登入状态为已经登入
        let params: { [key: string]: string } = {}
        LoginPageConfig.responseTokens.forEach((key, index) => {
          params[AuthHeaders[index]] = res.datas[key]
        })
        this.authService.setIn(params)//({ 'ng-params-one': res.datas.secret_id, 'ng-params-two': res.datas.token })
        this.authService.loadUserInfo()
        this.router.navigateByUrl('/')
      }
      else {
        this.message = this.message
      }
    })
  }

  //login data
  loginParams: any = {}

  //login message
  message: string = ""

  //page config
  loginPageConfig = this.systemService.loginPageConfig

  //background color
  bgColor = this.systemService.theme.bgColor

}
