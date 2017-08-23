import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Page } from './../../tools/components/pagination/page.class';
import { RoleManagerService } from './role-manager.service';
import { RoleInfoComponent } from './../../modals/role-info/role-info.component';
import { RolePermissionComponent } from './../../modals/role-permission/role-permission.component';
import { MdDialog } from '@angular/material';
import { DialogDefault, DialogInfo, DialogSuccess, DialogWarning, DialogDanger } from './../../tools/components/dialog';

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

  constructor(private roleMgService: RoleManagerService, private modalService: NgbModal, private dialog: MdDialog) { }

  ngOnInit() { this.loadRoles() }

  loadRoles() {
    this.roleMgService.getRoles(this.page.pageData).subscribe(res => {
      if (res.result) {
        this.roles = res.datas.rows
        this.page.total = res.datas.total
      }
    })

  }

  //open role  info edit pad
  openInfoChangeModal(index: number) {
    const modalRef = this.modalService.open(RoleInfoComponent)
    modalRef.componentInstance.role = this.roles[index]
  }
  
  //open role edit pad
  openPermissionChangeModal(index: number) {
    const modalRef = this.modalService.open(RolePermissionComponent)
    modalRef.componentInstance.role = this.roles[index]
  }

  //try delete a role by index
  deleteRole(index: number) {
    let dialogRef = this.dialog.open(DialogDanger, {
      data: {
        title: "Danger Message",
        message: "你确定要这么做,操作不可恢复?!"
      }
    })
    dialogRef.afterClosed().subscribe(result => { console.log(result ? "你选择了确认" : "你选择了关闭") })
  }

}
