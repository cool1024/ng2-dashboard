import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuSettingComponent } from './pages/menu-setting/menu-setting.component';

const routes: Routes = [
  { path: 'system/menu', component: MenuSettingComponent }
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
