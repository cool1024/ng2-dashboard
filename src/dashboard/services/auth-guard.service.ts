import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    let url: string = state.url;
    return this.checkLoginAnsy(url)
  }


  //同步校验登入
  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) { return true; }

    // 保存尝试跳转的页面
    this.authService.redirectUrl = url;

    // 跳转到登入页面
    this.router.navigateByUrl('login')
    return false;
  }

  //异步校验权限
  checkLoginAnsy(url: string): Observable<boolean> | boolean {

    return this.authService.isLoggedIn || this.authService.checkOnline()

  }

}