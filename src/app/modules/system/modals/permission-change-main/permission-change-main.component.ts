import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PermissionManagerService } from "./../../pages/permission-manager/permission-manager.service";
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-permission-change-main',
  templateUrl: './permission-change-main.component.html',
  styleUrls: ['./permission-change-main.component.scss'],
  providers: [PermissionManagerService]
})
export class PermissionChangeMainComponent {

  @Input() permissionModel: any = { id: 0, name: "" }

  @Input() title: string

  constructor(public activeModal: NgbActiveModal, private permissionMgService: PermissionManagerService) { }

  //修改权限
  applayPermissionModelChange(button: any) {
    this.permissionMgService.changePermissionModel(this.permissionModel).finally(() => button.complete = true).subscribe(res => {
      if (res.result) {
        this.activeModal.dismiss(this.permissionModel)
      }
    })
  }

  //关闭本模态框
  close() {
    this.activeModal.close("取消修改，并关闭窗口")
  }
}
