import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from './../../system.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
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
        { icon: "fa fa-table", title: "Table Example", url: "/test/table" },  
        { icon: "fa fa-superpowers", title: "Form Example", url: "/test/form" },                      
      ]
    })
    this.menus.push({
      icon: "fa fa-cogs", title: "Service Tool", childs: [
        { icon: "fa fa-spinner", title: "Show Loading", url: "/test/loading" },                    
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

  //sign out
  signOut(){
    this.router.navigateByUrl('/login')
  }

  //theme color
  themeConfig: any = this.systemService.theme

  //menu list
  menus = new Array<{ icon: string, title: string, childs: Array<any> }>()

  //menu collopse
  isCollopseArray: Array<boolean> = new Array<boolean>()

}
