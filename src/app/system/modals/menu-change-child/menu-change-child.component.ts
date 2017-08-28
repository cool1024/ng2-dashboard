import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MenuSettingService } from './../../pages/menu-setting/menu-setting.service'

@Component({
  selector: 'app-menu-change-child',
  templateUrl: './menu-change-child.component.html',
  styleUrls: ['./menu-change-child.component.scss'],
  providers: [MenuSettingService]
})
export class MenuChangeChildComponent {

  //菜单数据
  menu = { id: 0, title: "", icon: "", url: "#", parentid: 0 }

  constructor(public activeModal: NgbActiveModal, private menuSettingService: MenuSettingService) { }

  changeChildMenu(button: any) {
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

}
