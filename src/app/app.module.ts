import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import 'hammerjs';
import { ToastrModule } from 'ngx-toastr';

/*Material*/
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

/*ng2-select*/
// import { SelectModule } from 'ng2-select';

/*ng-bootstrap*/
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

/*app component*/
import { AppComponent } from './app.component';

/*module list*/
import { AppRoutingModule } from './app-routing.module';
import { SystemModule } from './system/system.module';
// import { TestModule } from './module/test/test.module';

/*interceptor list*/
import { ErrorCheckInterceptor } from './system/interceptors/ErrorCheckInterceptor';
import { HeaderInterceptor } from './system/interceptors/HeaderInterceptor';

/*public service*/
import { SystemService } from './system/system.service';
import { SessionService } from './system/services/session.service';
import { LocalService } from './system/services/local.service';
import { RequestService } from './system/services/request.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [

    /*angular module*/
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right', progressBar: true }),

    /*dev module*/
    // TestModule,

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
