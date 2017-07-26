import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SystemRoutingModule } from './system-routing.module';

/*system components*/
import { MenuComponent } from './components/menu/menu.component';
import { HeadbarComponent } from './components/headbar/headbar.component';

/*system pages*/
import { MenuSettingComponent } from './pages/menu-setting/menu-setting.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SystemRoutingModule,
  ],
  declarations: [
    MenuComponent,
    HeadbarComponent,
    MenuSettingComponent
  ],
  exports: [MenuComponent, HeadbarComponent]
})
export class SystemModule { }
