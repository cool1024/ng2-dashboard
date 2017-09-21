import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SystemRoutingModule } from './system.routing';

/*ng-bootstrap*/
// import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

/*default components & pages*/
import { MenuComponent } from './components/menu/menu.component';
import { HeadbarComponent } from './components/headbar/headbar.component';
import { LoginComponent } from './components/login/login.component';
import { AccountModalComponent } from './components/modal/modal.component';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // NgbModalModule,
    /*system module*/
    SystemRoutingModule,

  ],
  declarations: [
    HomeComponent,
    MenuComponent,
    HeadbarComponent,
    LoginComponent,
    Error404Component,
    AccountModalComponent,
  ],
  entryComponents: [
  ],
  exports: [MenuComponent, HeadbarComponent, LoginComponent]
})
export class SystemModule { }
