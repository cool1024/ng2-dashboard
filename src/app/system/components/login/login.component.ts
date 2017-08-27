import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from './../../system.service';
import { LoginService } from './login.service'
import { AuthService } from './../../services/auth.service'

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
        this.authService.setIn({ 'ng-params-one': res.datas.secret_id, 'ng-params-two': res.datas.token })
        this.router.navigateByUrl('/')
      }
      else {
        this.message = this.message
      }
    })
    //登入成功后设置登入状态为已经登入
    // this.authService.setIn({ 'ng-params-one': 'admin', 'ng-params-two': 'fjklqw8uewj4rwelkjr45jkoimnio' })
    // this.router.navigateByUrl('/')
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
