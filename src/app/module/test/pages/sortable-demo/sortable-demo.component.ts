import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sortable-demo',
  templateUrl: './sortable-demo.component.html',
  styleUrls: ['./sortable-demo.component.scss']
})
export class SortableDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  //list data
  items: Array<{ title: string, image: string }> = [
    { title: 'apple', image: '/assets/image/avatar/1.jpg' },
    { title: 'board', image: '/assets/image/avatar/2.jpg' },
    { title: 'car', image: '/assets/image/avatar/3.jpg' },
    { title: 'dist', image: '/assets/image/avatar/4.jpg' },
    { title: 'egg', image: '/assets/image/avatar/5.jpg' },
  ]

}
