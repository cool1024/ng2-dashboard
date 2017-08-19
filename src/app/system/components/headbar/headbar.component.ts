import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HeadbarService } from './headbar.service';
import { SystemService } from './../../system.service';
import { Breadcrumb } from './../../class/breadcrumb';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-headbar',
  templateUrl: './headbar.component.html',
  styleUrls: ['./headbar.component.scss']
})
export class HeadbarComponent implements OnInit {

  constructor(private systemService: SystemService, private headbarService: HeadbarService, private router: Router) { }

  ngOnInit() {
    //捕获路由跳转事件，获取当前路由的面包屑导航信息
    // this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
    //   console.log(this.router.config)
    // })
  }

  //修改系统主题
  changeTheme() { }

  //修改菜单尺寸
  changeMenuSize() {
    this.systemService.menuSetting.size = (this.systemService.menuSetting.size == 'sm' ? 'lg' : 'sm')
  }

  //系统菜单配置参数
  menuSetting = this.systemService.menuSetting

  //系统主题配置参数
  theme: any = this.systemService.theme

  //面包屑导航列表
  breadcrumbs: Array<Breadcrumb> = this.headbarService.breadcrumbs
}
