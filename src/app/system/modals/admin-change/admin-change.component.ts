import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PermissionManagerService } from "./../../pages/permission-manager/permission-manager.service";
import { SystemService } from "./../../system.service";
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-admin-change',
  templateUrl: './admin-change.component.html',
  styleUrls: ['./admin-change.component.scss']
})
export class AdminChangeComponent {

  config: Array<any>

  //表单数据
  @Input() admin: any = {}

  constructor(public activeModal: NgbActiveModal, private systemService: SystemService) {
    // { name: '描述', key: 'description' },
    // { name: '头像', key: 'avatar', type: 'image' }
    this.config = this.systemService.adminPageConfig.editor
  }

  addAdmin(button) {

  }

  //关闭本模态框
  close() {
    this.activeModal.close("取消添加，并关闭窗口")
  }

}
