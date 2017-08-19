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

  html_code=`
    <div class="row" [sortablejs]="items">
            <div class="col-sm-2" *ngFor="let item of items;index as i">
                <div class="card mb-4">
                    <img class="card-img-top" src="{{item.image}}" alt="Card image cap">
                    <div class="card-body">
                        <h4 class="title text-center">{{i}}.{{item.title}}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `

  ts_code=`
    items: Array<{ title: string, image: string }> = [
      { title: 'apple', image: '/assets/image/avatar/1.jpg' },
      { title: 'board', image: '/assets/image/avatar/2.jpg' },
      { title: 'car', image: '/assets/image/avatar/3.jpg' },
      { title: 'dist', image: '/assets/image/avatar/4.jpg' },
      { title: 'egg', image: '/assets/image/avatar/5.jpg' },
    ]
  `

}
