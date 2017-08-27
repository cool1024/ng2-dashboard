import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-permission-add-model',
  templateUrl: './permission-add-model.component.html',
  styleUrls: ['./permission-add-model.component.scss']
})
export class PermissionAddModelComponent {

  permissionModel: any = { id: 0, name: '', description: '' }

  constructor(public activeModal: NgbActiveModal) { }

  //添加权限模块
  addPermissionModel(button: any) {

    setTimeout(_ => {
      button.complete = true
      this.activeModal.dismiss(this.permissionModel)
    }, 2000)
  }

  //关闭本模态框
  close() {
    this.activeModal.close("取消添加，并关闭窗口")
  }


}