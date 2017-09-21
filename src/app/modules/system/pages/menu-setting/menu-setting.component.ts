import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MD_DIALOG_DATA, MdDialogRef } from '@angular/material';
import { DialogDanger } from './../../../../../tools/components/dialog';
import { Menus } from './../../../../../config/menus';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormCheckService } from './../../../../../dashboard/services/form-check.service';
import { MenuSettingService } from './menu-setting.service';
import { ToastrService } from 'ngx-toastr';
import { MenuAddMainComponent } from './../../modals/menu-add-main/menu-add-main.component';
import { MenuChangeMainComponent } from './../../modals/menu-change-main/menu-change-main.component';
import { MenuChangeChildComponent } from './../../modals/menu-change-child/menu-change-child.component';
import { MenuAddChildComponent } from './../../modals/menu-add-child/menu-add-child.component';

@Component({
  selector: 'app-menu-setting',
  templateUrl: './menu-setting.component.html',
  styleUrls: ['./menu-setting.component.scss'],
  providers: [MenuSettingService, FormCheckService]
})
export class MenuSettingComponent implements OnInit {

  //菜单列表
  menus = new Array<{ id: number, icon: string, title: string, childs: Array<{ id: number, icon: string, title: string, url: string, parentid: number, permissionid: number }> }>()

  constructor(public dialog: MdDialog, private modalService: NgbModal, private toast: ToastrService, private menuSettingService: MenuSettingService, private formService: FormCheckService) { }

  ngOnInit() {
    //this.menus = this.menus.concat(Menus)
    this.loadMenus()
  }

  //载入菜单列表
  loadMenus() {
    this.menuSettingService.getMenuGroups.subscribe(res => {
      let mains = new Array<{ id: number, icon: string, title: string, childs: Array<{ id: number, icon: string, title: string, url: string, parentid: number, permissionid: number }> }>()
      for (let i = 0; i < res.datas.length; i++) {
        if (res.datas[i].parentid == 0) {
          res.datas[i].groups.forEach(e => {
            mains.push({ id: e.id, icon: e.icon, title: e.title, childs: [] })
          })
          res.datas.splice(i, 1)
          break
        }
      }
      mains.forEach((e, i) => {
        mains[i].childs = this.menuSettingService.getChildByParentId(res.datas, e.id)
      })
      this.menus = mains
    })
  }

  //弹出子菜单列表面板
  openChildDialog(childs) {
    const dialog = this.dialog.open(MenuChildrenDialog, { data: childs });
    dialog.afterClosed().subscribe(res => {
      console.log(dialog.componentInstance.ids)
      this.menuSettingService.sortMenu(dialog.componentInstance.ids).subscribe(res => {
        if (res.result) {
          this.toast.success('排序成功~', '操作成功')
        }
      })
    })

  }

  //弹出主菜单添加面板
  showAddMainMenuPad() {
    const modal = this.modalService.open(MenuAddMainComponent)
    modal.result.catch(res => {
      if (!!res.id) {
        this.menus.push({ id: res.id, icon: res.icon, title: res.title, childs: [] })
        this.toast.success('添加成功~', '操作成功')
      }
    }).then()
  }

  //弹出主菜单修改面板
  showChangeMainMenuPad(index: number) {
    const modal = this.modalService.open(MenuChangeMainComponent)
    modal.componentInstance.menu = this.formService.copyJson(this.menus[index]);
    modal.componentInstance.title = this.menus[index].title
    modal.result.catch(res => {
      if (!!res.id) {
        this.menus[index].icon = res.icon
        this.menus[index].title = res.title
        this.toast.success('修改成功~', '操作成功')
      }
    }
    ).then()
  }

  //弹出子菜单添加面板
  showAddChangeChildMenuPad(index: number) {
    const modal = this.modalService.open(MenuAddChildComponent)
    modal.componentInstance.parentid = this.menus[index].id
    modal.result.catch(res => {
      if (!!res.id) {
        this.menus[index].childs.push(res)
        this.toast.success('添加成功~', '操作成功')
      }
    }
    ).then()
  }

  //弹出子菜单修改面板
  showChangeChildMenuPad(child: any) {
    const modal = this.modalService.open(MenuChangeChildComponent)
    modal.componentInstance.menu = this.formService.copyJson(child);
    modal.componentInstance.title = child.title
    modal.result.catch(res => {
      if (!!res.id) {
        child.title = res.title
        child.icon = res.icon
        child.url = res.url
        child.permissionid = res.permissionid
        this.toast.success('修改成功~', '操作成功')
      }
    }
    ).then()
  }

  //尝试删除主菜单
  deleteMainMenu(index: number) {

    //提示危险信息
    const dialogRef = this.dialog.open(DialogDanger, {
      data: {
        title: "风险提示",
        message: `您确认删除此菜单'${this.menus[index].title}'，菜单的所有下级菜单都会被删除！`
      }
    })

    //判断是否确认删除
    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.menuSettingService.deleteMenu(this.menus[index].id).subscribe(res => {
          if (res.result) {
            this.menus.splice(index, 1)
            this.toast.success('删除成功~', '操作成功')
          }
        })
      }
    })
  }

  //尝试删除子菜单
  deleteChildMenu(mainindex: number, childindex: number) {

    //提示危险信息
    const dialogRef = this.dialog.open(DialogDanger, {
      data: {
        title: "风险提示",
        message: `您确认删除此菜单'${this.menus[mainindex].childs[childindex].title}'，操作将无法恢复！`
      }
    })

    //判断是否确认删除
    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.menuSettingService.deleteMenu(this.menus[mainindex].childs[childindex].id).subscribe(res => {
          if (res.result) {
            this.menus[mainindex].childs.splice(childindex, 1)
            this.toast.success('删除成功~', '操作成功')
          }
        })
      }
    })
  }

  //排序主菜单
  sortMainMenu() {
    this.menuSettingService.sortMenu(this.formService.getIds(this.menus)).subscribe(res => {
      if (res.result) {
        this.toast.success('排序成功~', '操成功')
      }
    })
  }
}

@Component({
  templateUrl: 'children.component.html',
  providers: [FormCheckService],
})
export class MenuChildrenDialog {
  menus = new Array<{ icon: string, title: string, childs: Array<any> }>()
  constructor( @Inject(MD_DIALOG_DATA) public data: any, private formService: FormCheckService) {
    this.menus = data
  }

  get ids(): string {
    return this.formService.getIds(this.menus)
  }

}
