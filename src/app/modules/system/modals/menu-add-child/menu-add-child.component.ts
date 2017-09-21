import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MenuSettingService } from './../../pages/menu-setting/menu-setting.service';
import { ToastrService } from 'ngx-toastr';
import { FormCheckService } from './../../../../../dashboard/services/form-check.service';

@Component({
  selector: 'app-menu-add-child',
  templateUrl: './menu-add-child.component.html',
  styleUrls: ['./menu-add-child.component.scss'],
  providers: [MenuSettingService, FormCheckService]
})
export class MenuAddChildComponent {

  //菜单数据
  menu = { id: 0, title: "", icon: "", url: "", parentid: 0, permissionid: -1 }

  //上级菜单id
  parentid = 0

  //权限列表
  permissions: Array<{ id: number, text: string }> = [{ id: -1, text: '无需权限-default' }]

  constructor(public activeModal: NgbActiveModal, private menuSettingService: MenuSettingService, private toast: ToastrService, private formCheckService: FormCheckService) {

    this.menuSettingService.permissions.subscribe(res => {
      if (res.result) {
        let temp: Array<{ id: number, name: string, key: string }> = res.datas.permissions
        this.permissions = this.permissions.concat(temp.map(e => { return { id: e.id, text: `${e.name}-${e.key}` } }))
      }
    })
  }

  //获取默认选中的项目
  getActiveSelectItems(): Array<any> {
    return this.formCheckService.toNg2ActiveItem(this.menu.permissionid, this.permissions)
  }

  addChildMenu(button: any) {
    this.menu.parentid = this.parentid
    this.menuSettingService.addMenu(this.menu).subscribe(res => {
      button.complete = true
      if (res.result) {
        this.menu.id = res.id
        this.activeModal.dismiss(this.menu)
        this.toast.success('添加成功~', '操作成功')
      }
    })
  }

  //关闭本模态框
  close() {
    this.activeModal.close("取消添加，并关闭窗口")
  }

}
