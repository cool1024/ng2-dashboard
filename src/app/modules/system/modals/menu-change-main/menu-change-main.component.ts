import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MenuSettingService } from './../../pages/menu-setting/menu-setting.service'

@Component({
  selector: 'app-menu-change-main',
  templateUrl: './menu-change-main.component.html',
  styleUrls: ['./menu-change-main.component.scss'],
  providers: [MenuSettingService]
})
export class MenuChangeMainComponent {

  //菜单数据
  @Input() menu = { title: "", icon: "", url: "#", parentid: 0 }

  //标题
  @Input() title

  constructor(public activeModal: NgbActiveModal, private menuSettingService: MenuSettingService) { }

  changeMainMenu(button: any) {
    this.menuSettingService.changeMenu(this.menu).subscribe(res => {
      button.complete = true
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
