import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SystemService } from './../../system.service';
import { Menus } from './../../../config/menus';
import { AuthService } from './../../services/auth.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, private systemService: SystemService, private authService: AuthService) { }

  ngOnInit() {

    //load menus 
    this.menus = this.menus.concat(Menus)

    //open active main menu
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(_ => {
      let defaultActive = this.isCollopseArray[0] || false
      this.isCollopseArray = new Array<boolean>()
      this.isCollopseArray.push(defaultActive)
      this.menus.forEach(e => {
        this.isCollopseArray.push(this.hasActiveMenu(e.childs))
      })
    })
  }

  //has active menu item
  hasActiveMenu(menus: Array<any>) {
    let result = false
    menus.forEach(element => {
      if (element.url == this.router.url) {
        result = true
      }
    })
    return result
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
    this.isCollopseArray[index] = false
  }

  //is a active menu
  isActiveMenu(url: string) {
    return this.router.url == url
  }

  //sign out
  signOut() {
    this.authService.setOut()
    this.router.navigateByUrl('/login')
  }

  //theme color
  themeConfig: any = this.systemService.theme

  //content setting
  systemContent: any = this.systemService.systemContent

  //menu list
  menus = new Array<{ icon: string, title: string, childs: Array<any> }>()

  //menu collopse
  isCollopseArray: Array<boolean> = new Array<boolean>()

}
