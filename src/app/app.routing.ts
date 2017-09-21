import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './../dashboard/services/auth-guard.service';


const routes: Routes = [
  //此处设置网站首页
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  //懒加载子模块
  { path: 'system', loadChildren: 'app/modules/system/system-page.module#SystemPageModule', canActivate: [AuthGuard] },
  { path: 'test', loadChildren: 'app/modules/test/test.module#TestModule', canActivate: [AuthGuard] },
  { path: 'example', loadChildren: 'app/modules/example/example.module#ExampleModule', canActivate: [AuthGuard] },
  { path: 'docs', loadChildren: 'app/modules/docs/docs.module#DocsModule', canActivate: [AuthGuard] }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard
  ]
})
export class AppRoutingModule { }
