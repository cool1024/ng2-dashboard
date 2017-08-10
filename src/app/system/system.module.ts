import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdInputModule, MdDialogModule } from '@angular/material';
import { SortablejsModule } from 'angular-sortablejs';
import { SystemRoutingModule } from './system-routing.module';

/*system components*/
import { MenuComponent } from './components/menu/menu.component';
import { HeadbarComponent } from './components/headbar/headbar.component';
import { LoginComponent } from './components/login/login.component';

/*system pages*/
import { MenuSettingComponent, MenuChildrenDialog } from './pages/menu-setting/menu-setting.component';
import { Error404Component } from './pages/error404/error404.component';
import { PermissionManagerComponent } from './pages/permission-manager/permission-manager.component';
import { RoleManagerComponent } from './pages/role-manager/role-manager.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SortablejsModule,

    /*material module*/
    NoopAnimationsModule,
    MdButtonModule,
    MdInputModule,
    MdDialogModule,

    /*system module*/
    SystemRoutingModule,
  ],
  declarations: [
    MenuComponent,
    HeadbarComponent,
    MenuSettingComponent,
    MenuChildrenDialog,
    LoginComponent,
    Error404Component,
    PermissionManagerComponent,
    RoleManagerComponent,
  ],
  entryComponents: [
    MenuChildrenDialog,
  ],
  exports: [MenuComponent, HeadbarComponent, LoginComponent]
})
export class SystemModule { }
