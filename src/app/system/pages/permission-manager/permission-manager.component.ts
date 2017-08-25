import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DialogDanger } from './../../tools/components/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PermissionEditComponent } from './../../modals/permission-edit/permission-edit.component';

@Component({
  selector: 'app-permission-manager',
  templateUrl: './permission-manager.component.html',
  styleUrls: ['./permission-manager.component.scss']
})
export class PermissionManagerComponent implements OnInit {

  //积极状态的模块ID
  activeModelId = 1

  //权限列表
  permissions = [
    { id: 1, modelid: 1, name: "管理系统菜单", menuid: 1, description: '未描述权限' },
    { id: 2, modelid: 1, name: "管理系统角色", menuid: 1, description: '未描述权限' },
    { id: 3, modelid: 1, name: "管理系统权限", menuid: 1, description: '未描述权限' },
    { id: 4, modelid: 2, name: "管理系统菜单1", menuid: 1, description: '未描述权限' },
    { id: 5, modelid: 2, name: "管理系统角色1", menuid: 1, description: '未描述权限' },
    { id: 6, modelid: 2, name: "管理系统权限1", menuid: 1, description: '未描述权限' },
    { id: 7, modelid: 3, name: "管理系统菜单2", menuid: 1, description: '未描述权限' },
    { id: 8, modelid: 3, name: "管理系统角色2", menuid: 1, description: '未描述权限' },
    { id: 9, modelid: 3, name: "管理系统权限2", menuid: 1, description: '未描述权限' },
  ]

  //权限模块列表
  permissionsModels = [{ id: 1, name: '系统设置' }, { id: 2, name: '内置服务' }, { id: 3, name: '工具测试' }]

  //获取当前模块的权限列表
  get getActiveModelPermissions(): Array<any> {
    return this.permissions.filter(e => e.modelid == this.activeModelId)
  }

  constructor(private modalService: NgbModal, private dialog: MdDialog) { }

  ngOnInit() { }

  //弹出权限编辑窗口
  showChangeModal(index: number) {
    const modalRef = this.modalService.open(PermissionEditComponent)
    modalRef.componentInstance.permission = this.permissions[index]
  }

  //尝试删除权限
  deletePermission(index: number) {
    //show danger message
    let dialogRef = this.dialog.open(DialogDanger, {
      data: {
        title: "风险提示",
        message: `您确认删除权限 '${this.permissions[index].name}',操作不可恢复?！`
      }
    })

    //try delete role
    dialogRef.afterClosed().subscribe(result => {

    })
  }
}
