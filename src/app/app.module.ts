import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import 'hammerjs';
import { ToastrModule } from 'ngx-toastr';

/*app component*/
import { AppComponent } from './app.component';

/*module list*/
import { SystemModule } from './system/system.module';
import { TestModule } from './module/test/test.module';

/*interceptor list*/
import { ErrorCheckInterceptor } from './system/interceptors/ErrorCheckInterceptor';
import { HeaderInterceptor } from './system/interceptors/HeaderInterceptor';

/*public service*/
import { SystemService } from './system/system.service';
import { SessionService } from './system/service/session.service';
import { LocalService } from './system/service/local.service';
import { RequestService } from './system/service/request.service';


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
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right', progressBar: true }),

    /*dev module*/
    TestModule,

    /*system module must the end*/
    SystemModule,
  ],
  providers: [

    /*public service*/
    SystemService,
    SessionService,
    LocalService,
    RequestService,

    /*public interceptor*/
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorCheckInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
