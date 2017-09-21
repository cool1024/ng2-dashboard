import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PermissionManagerService } from "./../../pages/permission-manager/permission-manager.service";
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-permission-add-model',
  templateUrl: './permission-add-model.component.html',
  styleUrls: ['./permission-add-model.component.scss'],
  providers: [PermissionManagerService]
})
export class PermissionAddModelComponent {

  permissionModel: any = { id: 0, name: '', description: '' }

  constructor(public activeModal: NgbActiveModal, private permissionMgService: PermissionManagerService) { }

  //添加权限模块
  addPermissionModel(button: any) {

    this.permissionMgService.addPermissionModel(this.permissionModel).finally(() => button.complete = true).subscribe(res => {
      if (res.result) {
        this.permissionModel.id = res.id
        this.activeModal.dismiss(this.permissionModel)
      }
    })
  }

  //关闭本模态框
  close() {
    this.activeModal.close("取消添加，并关闭窗口")
  }


}