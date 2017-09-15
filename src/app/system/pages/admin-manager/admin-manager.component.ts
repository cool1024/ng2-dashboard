import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminChangeComponent } from './../../modals/admin-change/admin-change.component';
import { AdminAddComponent } from './../../modals/admin-add/admin-add.component';
import { SystemService } from './../../system.service';
import { AdminManagerService } from './admin-manager.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MdDialog } from '@angular/material';
import { DialogDanger } from './../../tools/components/dialog';
import { ToastrService } from 'ngx-toastr';
import { FormCheckService } from './../../services/form-check.service';
import { Page } from './../../tools/components/pagination/page.class';

@Component({
  selector: 'app-admin-manager',
  templateUrl: './admin-manager.component.html',
  styleUrls: ['./admin-manager.component.scss'],
  providers: [FormCheckService, AdminManagerService]
})
export class AdminManagerComponent implements OnInit {

  //页面配置信息
  pageConfig: any

  //账号列表
  admins: Array<any>

  //关键字段
  key: string

  //分页参数
  page = new Page()

  constructor(private toast: ToastrService, private dialog: MdDialog, private adminManagerService: AdminManagerService, private systemService: SystemService, private modalService: NgbModal, private formCheckService: FormCheckService) {
    this.pageConfig = systemService.adminPageConfig
    this.key = systemService.adminPageConfig.table.filter(e => e.primary == true)[0].key || systemService.adminPageConfig.table[0].key
  }

  ngOnInit() {
    this.loadAdmins()
  }

  loadAdmins() {
    this.adminManagerService.search(this.page.pageData).subscribe(res => {
      if (res.result) {
        this.page.reset()
        this.admins = res.datas.rows
        this.page.total = res.datas.total
      }
    })
  }

  //显示编辑窗口
  showChangeModal(index: number) {
    const modal = this.modalService.open(AdminChangeComponent)
    modal.componentInstance.admin = this.formCheckService.copyJson(this.admins[index])
    modal.componentInstance.title = this.admins[index][this.key]
    modal.result.catch(res => {
      if (res.id) {
        this.admins[index] = res
        this.toast.success('修改成功', '操作成功')
      }
    }).then()
  }

  //显示添加窗口
  showAddModal() {
    const modal = this.modalService.open(AdminAddComponent)
    modal.result.catch(res => {
      if (res.id) {
        this.admins.push(res)
      }
    }).then()
  }


  //删除账户
  deleteAdmin(index: number) {

    const dialog = this.dialog.open(DialogDanger, {
      data: {
        title: "风险提示",
        message: `您确认删除账号 '${this.admins[index][this.key]}' ,操作不可恢复?！`
      }
    })

    dialog.afterClosed().subscribe(res => {
      if (res == true) {
        this.adminManagerService.delete(this.admins[index].id).subscribe(res => {
          if (res.result) {
            this.admins.splice(index, 1)
            this.toast.success('删除成功', '操作成功')
          }
        })
      }
    })
  }


  //换页方法
  pageChanged(page: number) {
    this.page.page = page
    this.adminManagerService.search(this.page.pageData).subscribe(res => {
      if (res.result) {
        this.admins = res.datas.rows
        this.page.total = res.datas.total
      }
    })
  }
}
