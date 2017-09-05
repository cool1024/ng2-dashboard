import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormCheckService } from './../../services/form-check.service';
import { RoleManagerService } from "./../../pages/role-manager/role-manager.service";
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-role-info',
  templateUrl: './role-info.component.html',
  styleUrls: ['./role-info.component.scss'],
  providers: [FormCheckService, RoleManagerService]

})
export class RoleInfoComponent {

  //标题
  @Input() title: string

  //表单数据
  @Input() role: any

  //角色列表
  @Input() roles: Array<any>

  pad = { models: new Array<any>(), permissions: new Array<any>() }

  constructor(public activeModal: NgbActiveModal, private formCheckService: FormCheckService, private roleManagerService: RoleManagerService) {
    this.roleManagerService.getPermissionDatas.subscribe(res => {
      this.pad.models = res.datas.models
      this.pad.permissions = res.datas.permissions
    })

  }

  //获取指定模块的所有权限
  getPermissionsByModel(modelid: number) {
    return this.pad.permissions.filter(e => e.modelid == modelid)
  }

  //获取权限列表
  get permissions(): Array<number> {
    return this.formCheckService.idsToArray(this.role.permissions)
  }

  //移除权限
  removePermission(permissionid: number) {
    this.role.permissions = this.formCheckService.idsRemove(this.role.permissions, permissionid)
  }

  //添加权限
  addPermission(permissionid: number) {
    this.role.permissions = this.formCheckService.idsPush(this.role.permissions, permissionid)
  }

  //判断是否拥有指定权限
  hasPermission(permissionid: number) {
    return this.permissions.indexOf(permissionid) >= 0
  }

  //权限反转，如果有权限那么移除，如果没有那么添加
  reversePermission(permissionid: number) {
    if (!this.hasPermission(permissionid)) {
      this.addPermission(permissionid)
    }
    else {
      this.removePermission(permissionid)
    }
  }

  //修改角色信息
  applayInfoChange(button: any) {
    this.roleManagerService.changeRole(this.role).finally(() => button.complete = true).subscribe(res => {
      if (res.result) {
        this.activeModal.dismiss(this.role)
      }
    })
  }

  //关闭本模态框
  close() {
    this.activeModal.close("取消修改，并关闭窗口")
  }

}
