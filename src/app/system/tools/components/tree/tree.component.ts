import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  @Input() trees: Array<{ id: number, parentid: number, text: string }>
  @Input() parentid: number = 0
  @Output() activeOne: EventEmitter<{ id: number, parentid: number, text: string }>

  doClick(obj) {
    this.activeOne.emit(obj)
  }
}
