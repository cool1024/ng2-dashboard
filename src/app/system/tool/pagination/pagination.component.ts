import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Page } from './page.class'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges {

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add 'implements OnChanges' to the class.

  }

  //page param
  @Input() page: Page = new Page()

  //config param
  @Input() config: any = { size: 5 }

}
