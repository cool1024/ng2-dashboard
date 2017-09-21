import { Component, OnInit } from '@angular/core';
import { SystemService } from './../../system.service';

@Component({
  selector: 'app-headbar',
  templateUrl: './headbar.component.html',
  styleUrls: ['./headbar.component.scss']
})
export class HeadbarComponent implements OnInit {

  constructor(private systemService: SystemService) { }

  ngOnInit() { }

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

  //系统菜单
  menus: Array<any> = []
}
