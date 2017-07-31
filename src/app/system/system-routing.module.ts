import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuSettingComponent } from './pages/menu-setting/menu-setting.component';
import { LoginComponent } from './components/login/login.component';
import { Error404Component } from './pages/error404/error404.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'system/menu', component: MenuSettingComponent },
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
