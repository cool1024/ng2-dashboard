import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    //load menus 
    this.menus.push({
      icon: "fa fa-cog", title: "System Setting", childs: [
        { icon: "fa fa-list-ul", title: "Menu Board", url: "/" },
        { icon: "fa fa-users", title: "Role Group", url: "" },
        { icon: "fa fa-lock", title: "Permission List", url: "" }
      ]
    })
  }

  //list menu by index
  listMenu(index: number) {
    for (let i = 1; i < this.isCollopseArray.length; i++) {
      this.isCollopseArray[i] = false
    }
    this.isCollopseArray[index] = true
  }

  //close menu by index
  closeMenu(index: number) {
    this.isCollopseArray[index] = false;
  }

  //is a active menu
  isActiveMenu(url: string) {
    console.log(this.router.url)
    return this.router.url == url

  }

  //theme color
  themeConfig: any = {
    bgColor: "rgba(14, 93, 87, 0.91)",
    fontColor: "white",
    activeColor: "white"
  }

  //menu list
  menus = new Array<{ icon: string, title: string, childs: Array<any> }>()

  //menu collopse
  isCollopseArray: Array<boolean> = new Array<boolean>()

}
