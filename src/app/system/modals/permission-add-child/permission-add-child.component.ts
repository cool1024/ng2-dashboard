import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PermissionManagerService } from "./../../pages/permission-manager/permission-manager.service";

@Component({
  selector: 'app-permission-add-child',
  templateUrl: './permission-add-child.component.html',
  styleUrls: ['./permission-add-child.component.scss'],
  providers: [PermissionManagerService]
})
export class PermissionAddChildComponent {

  @Input() permissionModel: any

  permission: any = { id: 0, name: "", description: "", key: "", modelid: 0 }

  constructor(public activeModal: NgbActiveModal, private permissionMgService: PermissionManagerService) { }

  //添加权限
  addPermission(button: any) {
    this.permission.modelid = this.permissionModel.id
    this.permissionMgService.addPermission(this.permission).subscribe(res => {
      button.complete = true
      if (res.result) {
        this.permission.id = res.id
        this.activeModal.dismiss(this.permission)
      }
    })
  }

  //关闭本模态框
  close() {
    this.activeModal.close("取消修改，并关闭窗口")
  }

}
