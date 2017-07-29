import { Component, OnInit } from '@angular/core';
import { SystemService } from './../../system.service';

@Component({
  selector: 'app-headbar',
  templateUrl: './headbar.component.html',
  styleUrls: ['./headbar.component.scss']
})
export class HeadbarComponent implements OnInit {

  constructor(private systemService: SystemService) { }

  ngOnInit() { }

  changeTheme() {
    this.systemService.theme = { bgColor: "red", fontColor: "white", activeColor: "white" }
  }

  changeMenuSize() {
    this.systemService.menuSetting.size = this.systemService.menuSetting.size == 'sm' ? 'lg' : 'sm'
  }

  menuSetting = this.systemService.menuSetting

  theme: any = this.systemService.theme
}
