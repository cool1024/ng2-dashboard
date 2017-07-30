import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import { ToastrModule } from 'ngx-toastr';

/*app component*/
import { AppComponent } from './app.component';

/*module list*/
import { SystemModule } from './system/system.module';
import { TestModule } from './model/test/test.module';

/*public service*/
import { SystemService } from './system/system.service';

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
    ToastrModule.forRoot({positionClass:'toast-bottom-right',progressBar:true}),

    /*system module*/
    SystemModule,

    /*dev module*/
    TestModule,

  ],
  providers: [SystemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
