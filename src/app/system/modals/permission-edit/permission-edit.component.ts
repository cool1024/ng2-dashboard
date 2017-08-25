import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-permission-edit',
  templateUrl: './permission-edit.component.html',
  styleUrls: ['./permission-edit.component.scss']
})
export class PermissionEditComponent {

  @Input() permission: any

  constructor(public activeModal: NgbActiveModal) { }

  //修改权限
  applayPermissionChange(button: any) {

    setTimeout(_ => {
      button.complete = true
      this.activeModal.dismiss(this.permission)
    }, 2000)
  }

  //关闭本模态框
  close() {
    this.activeModal.close("取消修改，并关闭窗口")
  }


}