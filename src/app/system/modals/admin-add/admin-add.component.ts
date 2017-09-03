import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminManagerService } from "./../../pages/admin-manager/admin-manager.service";
import { SystemService } from "./../../system.service";
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.scss'],
  providers: [AdminManagerService]
})
export class AdminAddComponent {

  config: Array<any>

  //表单数据
  admin: any = {}

  constructor(public activeModal: NgbActiveModal, private systemService: SystemService, private adminManagerService: AdminManagerService) {
    this.config = this.systemService.adminPageConfig.editor
  }

  addAdmin(button) {
    this.adminManagerService.add(this.admin).finally(() => button.complete = true).subscribe(res => {
      if (res.result) {
        this.admin.id = res.id
        this.activeModal.dismiss(this.admin)
      }
    })
  }

  //关闭本模态框
  close() {
    this.activeModal.close("取消添加，并关闭窗口")
  }

}
