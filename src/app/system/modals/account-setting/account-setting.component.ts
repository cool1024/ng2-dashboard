import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './../../services/auth.service';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.scss']
})
export class AccountSettingComponent {

  user: any = {}

  password: string = ""

  constructor(private authService: AuthService, private activeModal: NgbActiveModal) {
    this.user = authService.user
  }

  //修改账户
  changeAccount(button) {
    this.authService.changeUserInfo({ password: this.password }).finally(() => button.complete = true).subscribe(res => {
      if (res.result) {
        this.activeModal.dismiss()
      }
    })
  }

  //关闭本模态框
  close() {
    this.activeModal.close("取消修改，并关闭窗口")
  }

}
