import { Injectable } from '@angular/core';
import { Breadcrumb } from './../../class/breadcrumb';

@Injectable()
export class HeadbarService {

  constructor() { }

  set breadcrumbs(breadcrumbs: Array<Breadcrumb>) {
    this._breadcrumbs = new Array<Breadcrumb>()
    breadcrumbs.forEach(e => this._breadcrumbs.push(new Breadcrumb(e.icon, e.title, e.url)))
  }

  get breadcrumbs(): Array<Breadcrumb> {
    return this._breadcrumbs;
  }

  private _breadcrumbs: Array<Breadcrumb>

}
