import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PermissionManagerService } from "./../../pages/permission-manager/permission-manager.service";
import { SystemService } from "./../../system.service";
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.scss']
})
export class AdminAddComponent {

  config: Array<any>

  //表单数据
  admin: any = {}

  constructor(public activeModal: NgbActiveModal, private systemService: SystemService) {
    this.config = this.systemService.adminPageConfig.editor
  }

  //添加账户
  addAdmin(button) {

  }

  //关闭本模态框
  close() {
    this.activeModal.close("取消添加，并关闭窗口")
  }

}
