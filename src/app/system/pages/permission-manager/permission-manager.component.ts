import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DialogDanger } from './../../tools/components/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PermissionEditComponent } from './../../modals/permission-edit/permission-edit.component';
import { PermissionAddModelComponent } from './../../modals/permission-add-model/permission-add-model.component';
import { PermissionAddChildComponent } from './../../modals/permission-add-child/permission-add-child.component';
import { PermissionManagerService } from "./permission-manager.service";
import { FormCheckService } from './../../services/form-check.service';

@Component({
  selector: 'app-permission-manager',
  templateUrl: './permission-manager.component.html',
  styleUrls: ['./permission-manager.component.scss'],
  providers: [PermissionManagerService, FormCheckService]
})
export class PermissionManagerComponent implements OnInit {

  //权限列表
  permissions = new Array<{ id: number, modelid: number, name: string, description: string, key: string }>()

  //权限模块列表
  permissionsModels = new Array<{ id: number, name: string }>()

  constructor(private modalService: NgbModal, private dialog: MdDialog, private permissionMgService: PermissionManagerService, private formCheckService: FormCheckService) { }

  ngOnInit() {
    this.loadPermissionsAndModel()
  }

  //载入权限列表&权限模块
  loadPermissionsAndModel() {
    this.permissionMgService.getAllPermission.subscribe(res => {
      if (res.result) {
        this.permissionsModels = res.datas.models
        this.permissions = res.datas.permissions
      }
    })
  }

  //获取指定模块的权限列表
  getModelPermissions(modelid: number): Array<any> {
    return this.permissions.filter(e => e.modelid == modelid)
  }

  //弹出权限编辑窗口
  showChangePermissionModal(permission: any) {
    let modalRef = this.modalService.open(PermissionEditComponent)
    modalRef.componentInstance.permission = this.formCheckService.copyJson(permission)
    modalRef.result.catch(res => {
      if (res.id) {
        permission.name = res.name
        permission.description = res.description
        permission.key = res.key
      }
    }).then()
  }

  //尝试删除权限
  deletePermission(permission: any) {

    //显示警告提示
    let dialogRef = this.dialog.open(DialogDanger, {
      data: {
        title: "风险提示",
        message: `您确认删除权限 '${permission.name}',操作不可恢复?！`
      }
    })

    //判断是否确认删除
    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.permissionMgService.deletePermission(permission.id).subscribe(res => {
          if (res.result) {
            let index = this.permissions.indexOf(permission)
            this.permissions.splice(index, 1)
          }
        })
      }
    })
  }

  //弹出添加权限模块窗口
  showAddModelModal() {
    const modalRef = this.modalService.open(PermissionAddModelComponent)
  }

  //弹出权限添加窗口
  showAddPermissionModal(modelindex: number) {
    const modalRef = this.modalService.open(PermissionAddChildComponent)
    modalRef.componentInstance.permissionModel = this.permissionsModels[modelindex]
    modalRef.result.catch(res => {
      if (res.id) {
        this.permissions.push(res)
      }
    }).then()
  }
}
