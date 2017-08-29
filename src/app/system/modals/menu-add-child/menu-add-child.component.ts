import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MenuSettingService } from './../../pages/menu-setting/menu-setting.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-menu-add-child',
  templateUrl: './menu-add-child.component.html',
  styleUrls: ['./menu-add-child.component.scss'],
  providers: [MenuSettingService]
})
export class MenuAddChildComponent {

  //菜单数据
  menu = { id: 0, title: "", icon: "", url: "", parentid: 0 }

  //上级菜单id
  parentid = 0

  constructor(public activeModal: NgbActiveModal, private menuSettingService: MenuSettingService, private toast: ToastrService) { }

  addChildMenu(button: any) {
    this.menu.parentid=this.parentid
    this.menuSettingService.addMenu(this.menu).subscribe(res => {
      button.loading = true
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
