import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PermissionManagerService } from "./../../pages/permission-manager/permission-manager.service";

@Component({
  selector: 'app-permission-change-child',
  templateUrl: './permission-change-child.component.html',
  styleUrls: ['./permission-change-child.component.scss'],
  providers: [PermissionManagerService]
})
export class PermissionChangeChildComponent {

  @Input() title: string

  @Input() permission: any = { id: 0, name: "", description: "", key: "", modelid: 0 }

  constructor(public activeModal: NgbActiveModal, private permissionMgService: PermissionManagerService) { }

  //修改权限
  applayPermissionChange(button: any) {
    this.permissionMgService.changePermission(this.permission).subscribe(res => {
      button.complete = true
      if (res.result) {
        this.activeModal.dismiss(this.permission)
      }
    })
  }

  //关闭本模态框
  close() {
    this.activeModal.close("取消修改，并关闭窗口")
  }


}