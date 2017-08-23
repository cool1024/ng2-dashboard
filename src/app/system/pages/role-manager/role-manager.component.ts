import { Component, OnInit } from '@angular/core';
import { Page } from './../../tools/components/pagination/page.class';
import { RoleManagerService } from './role-manager.service';

@Component({
  selector: 'app-role-manager',
  templateUrl: './role-manager.component.html',
  styleUrls: ['./role-manager.component.scss'],
  providers: [RoleManagerService]
})
export class RoleManagerComponent implements OnInit {

  //分页参数
  page = new Page()

  //角色列表
  roles = new Array<any>()

  constructor(private roleMgService: RoleManagerService) { }

  ngOnInit() { this.loadRoles() }

  loadRoles() {
    this.roleMgService.getRoles(this.page.pageData).subscribe(res => {
      if (res.result) {
        this.roles = res.datas.rows;
        this.page.total = res.datas.total;
      }
    })

  }

  //角色列表
  // roles = [
  //   { id: 1, parentid: 0, text: '主角色' },
  //   { id: 2, parentid: 1, text: '1号角色' },
  //   { id: 3, parentid: 1, text: '2号角色' },
  //   { id: 4, parentid: 2, text: '3号角色' },
  //   { id: 5, parentid: 2, text: '4号角色' },
  //   { id: 6, parentid: 3, text: '5号角色' },
  // ]

}
