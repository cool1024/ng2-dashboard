import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MenuSettingService } from './../../pages/menu-setting/menu-setting.service'
import { FormCheckService } from './../../services/form-check.service';

@Component({
  selector: 'app-menu-change-child',
  templateUrl: './menu-change-child.component.html',
  styleUrls: ['./menu-change-child.component.scss'],
  providers: [MenuSettingService, FormCheckService]
})
export class MenuChangeChildComponent {

  //菜单数据
  @Input() menu = { id: 0, title: "", icon: "", url: "#", parentid: 0, permissionid: -1 }

  //标题
  @Input() title: string

  permissions: Array<{ id: number, text: string }> = [{ id: -1, text: '无需权限-default' }]

  constructor(public activeModal: NgbActiveModal, private menuSettingService: MenuSettingService, private formCheckService: FormCheckService) {
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

  //修改子菜单
  changeChildMenu(button: any) {
    if (this.menu.permissionid == -1) this.menu.permissionid = 0
    this.menuSettingService.changeMenu(this.menu).subscribe(res => {
      if (res.result) {
        this.activeModal.dismiss(this.menu)
      }
    })
  }

  //关闭本模态框
  close() {
    this.activeModal.close("取消修改，并关闭窗口")
  }

  test($event) {
    console.log($event)
  }

}
