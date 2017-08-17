import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-manager',
  templateUrl: './role-manager.component.html',
  styleUrls: ['./role-manager.component.scss']
})
export class RoleManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  //
  showChangePad(role:any){
    alert(1)
  }

  //角色列表
  roles = [
    { id: 1, parentid: 0, text: '主角色' },
    { id: 2, parentid: 1, text: '1号角色' },
    { id: 3, parentid: 1, text: '2号角色' },
    { id: 4, parentid: 2, text: '3号角色' },
    { id: 5, parentid: 2, text: '4号角色' },
    { id: 6, parentid: 3, text: '5号角色' },
  ]

}
