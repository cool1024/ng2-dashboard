import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdInputModule } from '@angular/material';
import { SystemRoutingModule } from './system-routing.module';

/*system components*/
import { MenuComponent } from './components/menu/menu.component';
import { HeadbarComponent } from './components/headbar/headbar.component';
import { LoginComponent } from './components/login/login.component';

/*system pages*/
import { MenuSettingComponent } from './pages/menu-setting/menu-setting.component';
import { Error404Component } from './pages/error404/error404.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    /*material module*/
    NoopAnimationsModule,
    MdButtonModule,
    MdInputModule,

    /*system module*/
    SystemRoutingModule,
  ],
  declarations: [
    MenuComponent,
    HeadbarComponent,
    MenuSettingComponent,
    LoginComponent,
    Error404Component,
  ],
  exports: [MenuComponent, HeadbarComponent, LoginComponent]
})
export class SystemModule { }
