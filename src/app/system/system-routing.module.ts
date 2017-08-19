import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuSettingComponent } from './pages/menu-setting/menu-setting.component';
import { PermissionManagerComponent } from './pages/permission-manager/permission-manager.component';
import { RoleManagerComponent } from './pages/role-manager/role-manager.component';
import { LoginComponent } from './components/login/login.component';
import { Error404Component } from './pages/error404/error404.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'system/menu',
    component: MenuSettingComponent,
    data: {
      breadcrumbs: [
        { icon: 'fa fa-bars fa-fw fa-lg', title: '菜单设置' }
      ]
    }
  },
  {
    path: 'system/permission',
    component: PermissionManagerComponent,
    data: {
      breadcrumbs: [
        { icon: 'fa fa-lock fa-fw fa-lg', title: '权限设置' }
      ]
    }
  },
  {
    path: 'system/role',
    component: RoleManagerComponent,
    data: {
      breadcrumbs: [
        { icon: 'fa fa-users fa-fw fa-lg', title: '角色设置' }
      ]
    }
  },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SystemRoutingModule { }
