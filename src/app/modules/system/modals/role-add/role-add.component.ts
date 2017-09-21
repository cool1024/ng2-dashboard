import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormCheckService } from './../../../../../dashboard/services/form-check.service';
import { RoleManagerService } from "./../../pages/role-manager/role-manager.service";

@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.scss'],
  providers: [FormCheckService, RoleManagerService]
})
export class RoleAddComponent {

  role = { id: 0, name: '', description: '', parentid: 0, permissions: '' }

  @Input() roles: Array<any>

  @Input() pad = { models: new Array<any>(), permissions: new Array<any>() }

  constructor(public activeModal: NgbActiveModal, private formCheckService: FormCheckService, private roleManagerService: RoleManagerService) {
    this.roleManagerService.getPermissionDatas.subscribe(res => {
      this.pad.models = res.datas.models
      this.pad.permissions = res.datas.permissions
    })

  }

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

  //添加新角色
  addNewRole(button: any) {
    this.roleManagerService.addRole(this.role).finally(() => button.complete = true).subscribe(res => {
      if (res.result) {
        this.role.id=res.id;
        this.activeModal.dismiss(this.role)
      }
    })
    setTimeout(_ => {
      button.complete = true
      //this.activeModal.dismiss(this.role)
    }, 2000)
  }

  //关闭本模态框
  close() {
    this.activeModal.close("取消添加，并关闭窗口")
  }

}
