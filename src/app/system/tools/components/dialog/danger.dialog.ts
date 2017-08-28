import { Component, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  template: `
  <h2 md-dialog-title class="text-danger ">
    <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
    <span class="ml-2">{{data.title}}</span>
  </h2>
  <md-dialog-content class="text-danger">{{data.message}}</md-dialog-content>
  <md-dialog-actions>
    <div class="text-right w-100">
      <button class="btn btn-link text-muted" [md-dialog-close]="false">取消</button>
      <button class="btn btn-link text-danger" color="primary" [md-dialog-close]="true">确认</button>
    </div>
  </md-dialog-actions>
  `,
})
export class DialogDanger {

  constructor(public dialogRef: MdDialogRef<DialogDanger>, @Inject(MD_DIALOG_DATA) public data: any) { }
}