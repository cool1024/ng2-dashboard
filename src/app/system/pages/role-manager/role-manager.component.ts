import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Page } from './../../tools/components/pagination/page.class';
import { RoleManagerService } from './role-manager.service';
import { RoleInfoComponent } from './../../modals/role-info/role-info.component';
import { RolePermissionComponent } from './../../modals/role-permission/role-permission.component';
import { RoleAddComponent } from './../../modals/role-add/role-add.component';
import { MdDialog } from '@angular/material';
import { DialogDanger } from './../../tools/components/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-role-manager',
  templateUrl: './role-manager.component.html',
  styleUrls: ['./role-manager.component.scss'],
  providers: [RoleManagerService]
})
export class RoleManagerComponent implements OnInit {

  //分页参数
  page = new Page()

  //角色列表
  roles = new Array<any>()

  constructor(private roleMgService: RoleManagerService, private toast: ToastrService, private modalService: NgbModal, private dialog: MdDialog) { }

  ngOnInit() { this.loadRoles() }

  //load role list
  loadRoles() {
    this.roleMgService.getRoles(this.page.pageData).subscribe(res => {
      if (res.result) {
        this.roles = res.datas.rows
        this.page.total = res.datas.total
      }
    })

  }

  //open role info edit pad
  openInfoChangeModal(index: number) {
    const modalRef = this.modalService.open(RoleInfoComponent)
    modalRef.componentInstance.role = this.roles[index]
  }

  //open role edit pad
  openPermissionChangeModal(index: number) {
    const modalRef = this.modalService.open(RolePermissionComponent)
    modalRef.componentInstance.role = this.roles[index]
  }

  //open role add page
  openAddRoleMoal() {
    const modalRef = this.modalService.open(RoleAddComponent)
  }

  //try delete a role by index
  deleteRole(index: number) {

    //show danger message
    let dialogRef = this.dialog.open(DialogDanger, {
      data: {
        title: "风险提示",
        message: `您确认删除角色 '${this.roles[index].name}',操作不可恢复?！`
      }
    })

    //try delete role
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.roleMgService.deleteRole(this.roles[index].id).subscribe(res => {
          if (res.result) {
            this.roles.splice(index, 1)
            this.toast.success(res.message, '操作成功')
          }
        })
      }
    })
  }

  //on page changed
  pageChanged($event){
    
  }

}
