import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DialogDefault, DialogInfo, DialogSuccess, DialogWarning, DialogDanger } from './../../../../system/tools/components/dialog';

@Component({
  selector: 'app-confirm-window',
  templateUrl: './confirm-window.component.html',
  styleUrls: ['./confirm-window.component.scss']
})

export class ConfirmWindowComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  ngOnInit() { }

  openDialog(type: string) {

    let dialogRef: any
    switch (type) {
      case "success": {
        dialogRef = this.dialog.open(DialogSuccess, {
          data: {
            title: "Success Message",
            message: "你确定要这么做,操作不可恢复?!"
          }
        })
        break
      }
      case "info": {
        dialogRef = this.dialog.open(DialogInfo, {
          data: {
            title: "Info Message",
            message: "你确定要这么做,操作不可恢复?!"
          }
        })
        break
      }
      case "warning": {
        dialogRef = this.dialog.open(DialogWarning, {
          data: {
            title: "Warning Message",
            message: "你确定要这么做,操作不可恢复?!"
          }
        })
        break
      }
      case "danger": {
        dialogRef = this.dialog.open(DialogDanger, {
          data: {
            title: "Danger Message",
            message: "你确定要这么做,操作不可恢复?!"
          }
        })
        break
      }
      default: {
        dialogRef = this.dialog.open(DialogDefault, {
          data: {
            title: "Default Message",
            message: "你确定要这么做,操作不可恢复?!"
          }
        })
      }
    }
    dialogRef.afterClosed().subscribe(result => { console.log(result ? "你选择了确认" : "你选择了关闭") })
  }

  code = `
    import { DialogDefault} from '<path>/tool/components/dialog';
    import { MdDialog } from '@angular/material';

    constructor(public dialog: MdDialog) { }

    openDialog() {
      dialogRef = this.dialog.open(DialogDefault, {
          data: {
            title: "Default Message",
            message: "你确定要这么做,操作不可恢复?!"
          }
        })
    }
  `
}
