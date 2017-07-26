import { Component, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  template: `
  <h2 md-dialog-title class="text-success">
    <i class="fa fa-check-circle" aria-hidden="true"></i>
    <span class="ml-2">{{data.title}}</span>
  </h2>
  <md-dialog-content class="text-success">{{data.message}}</md-dialog-content>
  <md-dialog-actions>
    <div class="text-right w-100">
      <button class="btn btn-link text-muted" md-dialog-close>取消</button>
      <button class="btn btn-link text-success" color="primary" [md-dialog-close]="true">确认</button>
    </div>
  </md-dialog-actions>
  `,
})
export class DialogSuccess {

  constructor(public dialogRef: MdDialogRef<DialogSuccess>, @Inject(MD_DIALOG_DATA) public data: any) { }
}