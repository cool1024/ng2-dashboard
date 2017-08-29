import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdButtonModule, MdInputModule, MdDialogModule, MdMenuModule, MdCheckboxModule, MdSlideToggleModule, MdListModule } from '@angular/material';
import { SortablejsModule } from 'angular-sortablejs';
import { SystemRoutingModule } from './system-routing.module';

/*ng-bootstrap*/
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

/*tool module*/
import { ToolModule } from './../system/tools/tool.module';

/*system components*/
import { MenuComponent } from './components/menu/menu.component';
import { HeadbarComponent } from './components/headbar/headbar.component';
import { LoginComponent } from './components/login/login.component';

/*system pages*/
import { MenuSettingComponent, MenuChildrenDialog } from './pages/menu-setting/menu-setting.component';
import { Error404Component } from './pages/error404/error404.component';
import { PermissionManagerComponent } from './pages/permission-manager/permission-manager.component';
import { RoleManagerComponent } from './pages/role-manager/role-manager.component';

/*modals list*/
import { RoleInfoComponent } from './modals/role-info/role-info.component';
import { RolePermissionComponent } from './modals/role-permission/role-permission.component';
import { RoleAddComponent } from './modals/role-add/role-add.component';
import { PermissionEditComponent } from './modals/permission-edit/permission-edit.component';
import { PermissionAddModelComponent } from './modals/permission-add-model/permission-add-model.component';
import { PermissionAddChildComponent } from './modals/permission-add-child/permission-add-child.component';
import { MenuAddMainComponent } from './modals/menu-add-main/menu-add-main.component';
import { MenuAddChildComponent } from './modals/menu-add-child/menu-add-child.component';
import { MenuChangeMainComponent } from './modals/menu-change-main/menu-change-main.component';
import { MenuChangeChildComponent } from './modals/menu-change-child/menu-change-child.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SortablejsModule,
    NgbModalModule.forRoot(),

    /*material module*/
    MdButtonModule,
    MdInputModule,
    MdDialogModule,
    MdMenuModule,
    MdCheckboxModule,
    MdSlideToggleModule,
    MdListModule,

    /*system module*/
    SystemRoutingModule,

    /*tool module*/
    ToolModule,
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
    RoleInfoComponent,
    RolePermissionComponent,
    RoleAddComponent,
    PermissionEditComponent,
    PermissionAddModelComponent,
    PermissionAddChildComponent,
    MenuAddMainComponent,
    MenuAddChildComponent,
    MenuChangeMainComponent,
    MenuChangeChildComponent,
  ],
  entryComponents: [
    MenuChildrenDialog,
    RoleInfoComponent,
    RolePermissionComponent,
    RoleAddComponent,
    PermissionEditComponent,
    PermissionAddModelComponent,
    PermissionAddChildComponent,
    MenuAddMainComponent,
    MenuAddChildComponent,
    MenuChangeMainComponent,
    MenuChangeChildComponent,
  ],
  exports: [MenuComponent, HeadbarComponent, LoginComponent]
})
export class SystemModule { }
