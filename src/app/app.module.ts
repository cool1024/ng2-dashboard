import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdDialogModule, MdDialogTitle, MdDialogContent, MdDialogActions, MdDialogClose } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { SystemModule } from './system/system.module';
import { TestModule } from './model/test/test.module';

const appRoutes: Routes = [
  { path: '', redirectTo: 'test/alert', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [

    /*angular module*/
    BrowserModule,
    RouterModule.forRoot(appRoutes),

    /*system module*/
    SystemModule,

    /*dev module*/
    TestModule,

    /*material module*/

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
