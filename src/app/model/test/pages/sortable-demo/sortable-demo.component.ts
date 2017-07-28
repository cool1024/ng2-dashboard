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
    { title: 'apple', image: '/assets/image/photo.jpg' },
    { title: 'board', image: '/assets/image/photo.jpg' },
    { title: 'car', image: '/assets/image/photo.jpg' },
    { title: 'dist', image: '/assets/image/photo.jpg' },
    { title: 'egg', image: '/assets/image/photo.jpg' },
  ]

}
