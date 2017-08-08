import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MD_DIALOG_DATA } from '@angular/material';
import { Menus } from './../../../config/config';

@Component({
  selector: 'app-menu-setting',
  templateUrl: './menu-setting.component.html',
  styleUrls: ['./menu-setting.component.scss']
})
export class MenuSettingComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
    this.menus = this.menus.concat(Menus)
  }

  openChildDialog(childs) {
    this.dialog.open(MenuChildrenDialog, { data: childs });
  }

  //menu list
  menus = new Array<{ icon: string, title: string, childs: Array<any> }>()
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
