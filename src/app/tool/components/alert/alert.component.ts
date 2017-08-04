import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-window',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() styles = { 'background-color': 'rgba(0, 0, 0, 0.24)' };
  @Input() className = "card-danger";
  @Input() title = "警告";
  @Input() message = "您确定要这么做吗，此操作将不可恢复？";
  @Output() ok = new EventEmitter<string>();
  @Output() cancel = new EventEmitter();
  public okFunction = new Function();
  public cancelFunction = new Function();

  display: boolean = false;

  constructor() { }

  ngOnInit() { }

  doOk() {
    this.ok.emit("aaaa");
    this.hidden();
    this.okFunction();
  }

  doCancel() {
    this.cancel.emit();
    this.hidden();
    this.cancelFunction();
  }

  show(okFunction?: Function, cancelFunction?: Function) {
    this.display = true;
    this.okFunction = okFunction || this.okFunction;
    this.cancelFunction = cancelFunction || this.cancelFunction;
  }

  hidden() {
    this.display = false;
  }

  set onOk(okFunction: Function) {
    this.okFunction = okFunction;
  }

  set onCancel(cancelFunction: Function) {
    this.cancelFunction = cancelFunction;
  }
}
