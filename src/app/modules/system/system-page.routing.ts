import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuSettingComponent } from './pages/menu-setting/menu-setting.component';
import { PermissionManagerComponent } from './pages/permission-manager/permission-manager.component';
import { RoleManagerComponent } from './pages/role-manager/role-manager.component';
import { AdminManagerComponent } from './pages/admin-manager/admin-manager.component';

const routes: Routes = [
  { path: 'menu', component: MenuSettingComponent },
  { path: 'permission', component: PermissionManagerComponent },
  { path: 'role', component: RoleManagerComponent },
  { path: 'admin', component: AdminManagerComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SystemPageRoutingModule { }
