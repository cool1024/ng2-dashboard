import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-model-window',
  templateUrl: './alert-window.component.html',
  styleUrls: ['./alert-window.component.css']
})

export class AlertWindowComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  showAlert(className: string, title: string, message: string, alert: any) {
    this.className = className;
    this.title = title;
    this.message = message;
    alert.show(
      () => { },//可选：点击成功执行
      () => { },//可选：点击取消执行
    )
    this.window = alert;
  }

  ok() {
    console.log("你点击了确定");
  }

  cancel() {
    console.log("你点击了取消");
  }

  public className: string;
  public title: string;
  public message: string;
  public window: any;

}
