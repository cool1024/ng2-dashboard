import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-window',
  templateUrl: './alert-window.component.html',
  styleUrls: ['./alert-window.component.scss']
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

  className: string;
  title: string;
  message: string;
  window: any;

  html_code = `
    <button class="mt-1 btn btn-danger" (click)="showAlert(alert)">打开提示框</button>
    <!--添加这行标签到组件的HTML页面最末尾-->
    <app-alert-window #alert [className]="'card-inverse card-danger'" [title]="'警告" [message]="'你确定要这么做吗'"></app-alert-window>  
  `
  ts_code = `
    showAlert(alert: any) {
      alert.show(
        () => { },//可选：点击成功执行
        //() => { },//可选：点击取消执行
      )
    }
  `

}
