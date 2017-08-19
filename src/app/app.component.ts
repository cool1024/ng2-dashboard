import { Component, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './system/services/auth.service';
import { SystemService } from './system/system.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private systemService: SystemService, private authService: AuthService, private router: Router) { }

  minSetting = this.systemService.menuSetting

  mnImage = `url(${this.systemService.theme.mnImage})`

  isLoginPage(): boolean {
    return this.router.url == '/login' || !this.authService.isLoggedIn
  }

}
