import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './system/services/auth-guard.service';

const routes: Routes = [
  //此处设置网站首页
  { path: '', redirectTo: '/system/menu', pathMatch: 'full' },

  //懒加载子模块
  { path: 'test', loadChildren: 'app/modules/test/test.module#TestModule' ,canActivate:[AuthGuard]},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
