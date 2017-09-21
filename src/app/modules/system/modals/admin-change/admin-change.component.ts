import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PermissionManagerService } from "./../../pages/permission-manager/permission-manager.service";
import { SystemService } from "./../../../../../dashboard/system.service";
import { AdminManagerService } from "./../../pages/admin-manager/admin-manager.service";
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-admin-change',
  templateUrl: './admin-change.component.html',
  styleUrls: ['./admin-change.component.scss'],
  providers: [AdminManagerService]
})
export class AdminChangeComponent {

  config: Array<any>

  //角色列表
  roles = new Array<any>()

  //表单数据
  @Input() admin: any = {}

  //标题
  @Input() title: string

  constructor(public activeModal: NgbActiveModal, private systemService: SystemService, private adminManagerService: AdminManagerService) {
    this.config = this.systemService.adminPageConfig.editor
    this.adminManagerService.getRolesOptions.subscribe(res => {
      if (res.result) {
        this.roles = res.datas
      }
    })
  }

  changeAdmin(button) {
    this.adminManagerService.update(this.admin).finally(() => button.complete = true).subscribe(res => {
      if (res.result) {
        this.activeModal.dismiss(this.admin)
      }
    })
  }

  //关闭本模态框
  close() {
    this.activeModal.close("取消添加，并关闭窗口")
  }

}
