import { Component, Input, Output, ViewChild } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { LoginPageConfig } from './../../../config/login';

@Component({
  selector: 'app-account-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class AccountModalComponent {

  @ViewChild('pad') pad: any;

  show = false

  user: any = {}

  inputsConfig = LoginPageConfig.inputs

  password: string

  constructor(private authService: AuthService, private toastr: ToastrService) {
    this.user = authService.user
    this.password = ""
  }


  open() {
    this.show = true
  }

  changeAccount() {
    this._dismiss()
  }

  _close() {
    this.show = false
  }

  _dismiss() {

    this.authService.changeUserInfo({ password: this.password }).subscribe(res => {
      if (res.result) {
        this.show = false
        this.toastr.success('修改密码成功', '操作成功')
      }
    })
  }

  tryClose(event) {
    if (event.target === this.pad.nativeElement) {
      this._close()
    }
  }

}
