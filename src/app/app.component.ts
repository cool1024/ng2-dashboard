import { Component, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from './system/system.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private systemService: SystemService, private router: Router) { }

  minSetting = this.systemService.menuSetting

  isLoginPage(): boolean {
    return this.router.url == '/login'
  }

}
