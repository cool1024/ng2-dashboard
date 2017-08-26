import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-permission-add-child',
  templateUrl: './permission-add-child.component.html',
  styleUrls: ['./permission-add-child.component.scss']
})
export class PermissionAddChildComponent {

  @Input() permissionModel: any

  permission: any = { id: 0, name: "", description: "", menuid: 0, modelid: 0 }

  constructor(public activeModal: NgbActiveModal) { }

  //添加权限
  addPermission(button: any) {

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
