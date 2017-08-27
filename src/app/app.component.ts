import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './system/services/auth.service';
import { SystemService } from './system/system.service';
import { LoadingService } from './system/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoadingService]
})
export class AppComponent implements OnInit {

  //菜单设置
  minSetting = this.systemService.menuSetting

  //系统图标
  mnImage = `url(${this.systemService.theme.mnImage})`

  constructor(private systemService: SystemService, private authService: AuthService, private router: Router, private loadingService: LoadingService) { }

  ngOnInit() {

    //判断登入状态（服务器校验时显示动画）
    this.loadingService.play(this.loadingService.player.squre)
    this.authService.checkOnline().subscribe(_ => this.loadingService.hiden())
  }

  isLoginPage(): boolean {
    return this.router.url == '/login' || !this.authService.isLoggedIn
  }

}
