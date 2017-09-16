import { Component, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  template: `
  <h2 md-dialog-title>
    <i class="fa fa-commenting-o" aria-hidden="true"></i>
    <span class="ml-2">{{data.title}}</span>
  </h2>
  <md-dialog-content>{{data.message}}</md-dialog-content>
  <md-dialog-actions>
    <div class="text-right w-100">
      <button class="btn btn-link text-muted" md-dialog-close>取消</button>
      <button class="btn btn-link text-dark" [md-dialog-close]="true">确认</button>
    </div>
  </md-dialog-actions>
  `,
})
export class DialogDefault {

  constructor(public dialogRef: MdDialogRef<DialogDefault>, @Inject(MD_DIALOG_DATA) public data: any) { }
}