import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MD_DIALOG_DATA } from '@angular/material';
import { Menus } from './../../../config/menus';
import { MenuSettingService } from './menu-setting.service';

@Component({
  selector: 'app-menu-setting',
  templateUrl: './menu-setting.component.html',
  styleUrls: ['./menu-setting.component.scss'],
  providers: [MenuSettingService]
})
export class MenuSettingComponent implements OnInit {

  //菜单列表
  menus = new Array<{ icon: string, title: string, childs: Array<any> }>()

  constructor(public dialog: MdDialog, private menuSettingService: MenuSettingService) { }

  ngOnInit() {
    //this.menus = this.menus.concat(Menus)
    this.loadMenus()
  }

  loadMenus() {
    this.menuSettingService.getMenuGroups.subscribe(res => {
      let mains = new Array<{ id: number, icon: string, title: string, childs: Array<{ id: number, icon: string, title: string, url: string, parentid: number }> }>()
      for (let i = 0; i < res.datas.length; i++) {
        if (res.datas[i].parentid == 0) {
          res.datas[i].groups.forEach(e => {
            mains.push({ id: e.id, icon: e.icon, title: e.title, childs: [] })
          })
          res.datas.splice(i, 1)
          break
        }
      }
      mains.forEach((e, i) => {
        mains[i].childs = this.menuSettingService.getChildByParentId(res.datas, e.id)
      })
      this.menus=mains
    })
  }

  openChildDialog(childs) {
    this.dialog.open(MenuChildrenDialog, { data: childs });
  }

  addMainMenu() {

  }
}

@Component({
  templateUrl: 'children.component.html',
})
export class MenuChildrenDialog {
  menus = new Array<{ icon: string, title: string, childs: Array<any> }>()
  constructor( @Inject(MD_DIALOG_DATA) public data: any) {
    this.menus = data
  }
}
