import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from './../../system.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, private systemService: SystemService) { }

  ngOnInit() {
    //load menus 
    this.menus.push({
      icon: "fa fa-cog", title: "System Setting", childs: [
        { icon: "fa fa-list-ul", title: "Menu Board", url: "/" },
        { icon: "fa fa-users", title: "Role Group", url: "" },
        { icon: "fa fa-lock", title: "Permission List", url: "" }
      ]
    })
    this.menus.push({
      icon: "fa fa-cubes", title: "工具测试", childs: [
        { icon: "fa fa-television", title: "ALERT弹窗演示", url: "/test/alert" },
        { icon: "fa fa-window-restore", title: "Dialog弹窗演示", url: "/test/confirm" },
        { icon: "fa fa-pie-chart", title: "Charts Example", url: "/test/charts" },
        { icon: "fa fa-sort", title: "Sortable JS", url: "/test/sortable" },
        { icon: "fa fa-chevron-circle-down", title: "Select Example", url: "/test/select" },
      ]
    })
  }

  //list menu by index
  listMenu(index: number) {
    console.log(index)
    for (let i = 1; i < this.isCollopseArray.length; i++) {
      this.isCollopseArray[i] = false
    }
    this.isCollopseArray[index] = true
  }

  //close menu by index
  closeMenu(index: number) {
    this.isCollopseArray[index] = false
  }

  //is a active menu
  isActiveMenu(url: string) {
    return this.router.url == url

  }

  //theme color
  themeConfig: any = this.systemService.theme

  //menu list
  menus = new Array<{ icon: string, title: string, childs: Array<any> }>()

  //menu collopse
  isCollopseArray: Array<boolean> = new Array<boolean>()

}
