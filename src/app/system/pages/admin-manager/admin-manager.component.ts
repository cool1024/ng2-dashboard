import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminChangeComponent } from './../../modals/admin-change/admin-change.component';
import { AdminAddComponent } from './../../modals/admin-add/admin-add.component';
import { SystemService } from './../../system.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MdDialog } from '@angular/material';
import { DialogDanger } from './../../tools/components/dialog';
import { FormCheckService } from './../../services/form-check.service';
import { Page } from './../../tools/components/pagination/page.class';

@Component({
  selector: 'app-admin-manager',
  templateUrl: './admin-manager.component.html',
  styleUrls: ['./admin-manager.component.scss'],
  providers: [FormCheckService]
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

  //弹窗配置文件
  addModalConfig = {
    title: '@Modal',
    inputs: [
      { title: 'E-mail', name: 'email', placeholder: 'please enter your email', type: 'input' },
      { title: 'Password', name: 'password', placeholder: 'please enter your password', type: 'password' },
      { title: 'Description', name: 'description', placeholder: 'please enter your email', type: 'textarea' },
    ],
    buttons: [
      { title: 'Close', type: 'close' },
      { title: 'Confirm', type: 'dismiss' },
    ]
  }

  constructor(private dialog: MdDialog, private systemService: SystemService, private modalService: NgbModal, private formCheckService: FormCheckService) {
    this.pageConfig = systemService.adminPageConfig
    this.key = systemService.adminPageConfig.table.filter(e => e.primary == true)[0].key || systemService.adminPageConfig.table[0].key
    this.admins = [
      { id: 1, account: 'xiaojian', description: 'none', avatar: "http://cool1024.com/flat-ui/img/box-image/message.jpg" },
      { id: 1, account: 'xiaojian', description: 'none', avatar: "http://hello1024.oss-cn-beijing.aliyuncs.com/body.jpg" }
    ]
    this.page.total = this.admins.length
  }

  ngOnInit() { }

  //显示编辑窗口
  showChangeModal(index: number) {
    const modal = this.modalService.open(AdminChangeComponent)
    modal.componentInstance.admin = this.formCheckService.copyJson(this.admins[index])
    modal.componentInstance.title = this.admins[index][this.key]
    modal.result.catch(res => {

    }).then()
  }

  //显示添加窗口
  showAddModal(modal) {
    modal.open()
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
        this.admins.splice(index, 1)
      }
    })
  }

  //换页事件
  pageChanged(page) {

  }

}
