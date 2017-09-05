import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MenuSettingService } from './../../pages/menu-setting/menu-setting.service'

@Component({
  selector: 'app-menu-add-main',
  templateUrl: './menu-add-main.component.html',
  styleUrls: ['./menu-add-main.component.scss'],
  providers: [MenuSettingService]
})
export class MenuAddMainComponent {

  //菜单数据
  menu = { title: "", icon: "", url: "#", parentid: 0, permissionid: 0 }

  constructor(public activeModal: NgbActiveModal, private menuSettingService: MenuSettingService) { }

  addMainMenu(button: any) {
    this.menuSettingService.addMenu(this.menu).subscribe(res => {
      button.complete = true
      if (res.result) {
        let menu = { id: res.id, title: this.menu.title, icon: this.menu.icon }
        this.activeModal.dismiss(menu)
      }
    })
  }

  //关闭本模态框
  close() {
    this.activeModal.close("取消修改，并关闭窗口")
  }
}
