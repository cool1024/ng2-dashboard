import { Injectable } from '@angular/core';
import { RequestService } from './../../services/request.service';
import { ApiData } from './../../classes/api';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MenuService {

  constructor(private requestService: RequestService) { }

  get menus(): Observable<ApiData> {
    return this.requestService.url('/menus');
  }

  formateMenu(menus: Array<{ parentid: number, groups: Array<any> }>) {

    let mains: { parentid: number, groups: Array<any> }
    let mainIndex = -1

    for (let i = 0; i < menus.length; i++) {
      if (menus[i].parentid == 0) {
        mains = menus[i]
        mainIndex = i
        break
      }
    }

    //not mains
    if (mainIndex < 0) {
      return []
    }

    menus.splice(mainIndex, 1)

    let temps = new Array<{ icon: string, title: string, childs: Array<{ icon: string, title: string, url: string }> }>()

    for (let i = 0; i < mains.groups.length; i++) {
      let temp = { icon: mains.groups[i].icon, title: mains.groups[i].title, childs: [] }
      let childs = menus.filter(e => e.parentid == mains.groups[i].id)
      temp.childs = childs.length > 0 ? childs[0].groups : []
      temps.push(temp)
    }

    return temps
  }

}
