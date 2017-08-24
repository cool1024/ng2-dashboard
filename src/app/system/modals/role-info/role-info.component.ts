import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-role-info',
  templateUrl: './role-info.component.html',
  styleUrls: ['./role-info.component.scss']
})
export class RoleInfoComponent {

  @Input() role: any

  //是否在发送数据
  isSendData = false

  constructor(public activeModal: NgbActiveModal) { }

  //修改角色信息
  applayInfoChange(button:any) {

    setTimeout(_ => {
      button.complete=true
      this.activeModal.dismiss(this.role)
    }, 2000)
  }

  //关闭本模态框
  close() {
    this.activeModal.close("取消修改，并关闭窗口")
  }

}
