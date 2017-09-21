import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Page } from './../../../../../tools/components/pagination/page.class';
import { RoleManagerService } from './role-manager.service';
import { RoleInfoComponent } from './../../modals/role-info/role-info.component';
import { RoleAddComponent } from './../../modals/role-add/role-add.component';
import { MdDialog } from '@angular/material';
import { DialogDanger } from './../../../../../tools/components/dialog';
import { ToastrService } from 'ngx-toastr';
import { FormCheckService } from './../../../../../dashboard/services/form-check.service';

@Component({
  selector: 'app-role-manager',
  templateUrl: './role-manager.component.html',
  styleUrls: ['./role-manager.component.scss'],
  providers: [RoleManagerService, FormCheckService]
})
export class RoleManagerComponent implements OnInit {

  //分页参数
  page = new Page()

  //角色列表
  roles = new Array<any>()

  constructor(private roleMgService: RoleManagerService, private toast: ToastrService, private modalService: NgbModal, private dialog: MdDialog, private formCheckService: FormCheckService) { }

  ngOnInit() { this.loadRoles() }

  //载入角色列表
  loadRoles() {
    this.roleMgService.getRoles(this.page.pageData).subscribe(res => {
      if (res.result) {
        this.roles = res.datas.rows
        this.page.total = res.datas.total
      }
    })
  }

  //弹出角色编辑面板
  openInfoChangeModal(index: number) {
    const modalRef = this.modalService.open(RoleInfoComponent)
    modalRef.componentInstance.role = this.formCheckService.copyJson(this.roles[index])
    modalRef.componentInstance.roles = this.roles.concat()
    modalRef.componentInstance.roles.splice(index, 1)
    modalRef.componentInstance.title = this.roles[index].name

    modalRef.result.catch(res => {
      if (res.id) {
        this.roles[index].name = res.name
        this.roles[index].description = res.description
        this.roles[index].parentid = res.parentid
        this.roles[index].permissions = res.permissions
        this.toast.success("修改成功", "操作成功")
      }
    }).then()
  }

  //弹出角色添加面板
  openAddRoleMoal() {
    const modalRef = this.modalService.open(RoleAddComponent)
    modalRef.componentInstance.roles = this.roles
    modalRef.result.catch(res => {
      if (res.id) {
        this.roles.push(res)
        this.toast.success("成功添加新角色", "操作成功")
      }
    })
  }

  //尝试删除角色
  deleteRole(index: number) {

    //显示警告信息
    let dialogRef = this.dialog.open(DialogDanger, {
      data: {
        title: "风险提示",
        message: `您确认删除角色 '${this.roles[index].name}',操作不可恢复?！`
      }
    })

    //是否删除角色
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.roleMgService.deleteRole(this.roles[index].id).subscribe(res => {
          if (res.result) {
            this.roles.splice(index, 1)
            this.toast.success('删除成功', '操作成功')
          }
        })
      }
    })
  }

  //换页方法
  pageChanged($event) {

  }

}
