import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuSettingComponent } from './pages/menu-setting/menu-setting.component';
import { PermissionManagerComponent } from './pages/permission-manager/permission-manager.component';
import { RoleManagerComponent } from './pages/role-manager/role-manager.component';
import { AdminManagerComponent } from './pages/admin-manager/admin-manager.component';
import { LoginComponent } from './components/login/login.component';
import { Error404Component } from './pages/error404/error404.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'system/menu', component: MenuSettingComponent },
  { path: 'system/permission', component: PermissionManagerComponent },
  { path: 'system/role', component: RoleManagerComponent },
  { path: 'system/admin', component: AdminManagerComponent },
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
