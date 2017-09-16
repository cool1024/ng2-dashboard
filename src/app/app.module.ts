import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import 'hammerjs';

/*Material*/
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

/*ng-bootstrap*/
import { NgbModalModule, NgbDatepickerModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

/*froala-editor*/
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

/*app component*/
import { AppComponent } from './app.component';

/*module list*/
import { AppRoutingModule } from './app.routing';
import { SystemModule } from './system/system.module';

/*interceptor list*/
import { ErrorCheckInterceptor } from './system/interceptors/ErrorCheckInterceptor';
import { HeaderInterceptor } from './system/interceptors/HeaderInterceptor';

/*public system service*/
import { SystemService } from './system/system.service';
import { SessionService } from './system/services/session.service';
import { LocalService } from './system/services/local.service';
import { StorageService } from './system/services/storage.service';
import { RequestService } from './system/services/request.service';
import { AuthGuard } from './system/services/auth-guard.service';
import { AuthService } from './system/services/auth.service';

/*public components service*/
import { HeadbarService } from './system/components/headbar/headbar.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [

    /*angular module 不可移除模块*/
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right', progressBar: true }),
    NgbModalModule.forRoot(),

    /*froala-editor 富文本编辑器，可移除模块*/
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),

    /*ng-bootstrap 日历控件，可移除模块*/
    NgbDatepickerModule.forRoot(),

    /*ng-bootstrap 进度条控件，可移除模块*/
    NgbProgressbarModule.forRoot(),

    /*system module must the end*/
    SystemModule,
  ],
  providers: [

    /*public system service*/
    SystemService,
    SessionService,
    LocalService,
    StorageService,
    RequestService,
    AuthService,
    AuthGuard,

    /*public components service*/
    HeadbarService,

    /*public interceptor*/
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorCheckInterceptor, multi: true },

    //material default setting
    { provide: LOCALE_ID, useValue: 'zh-cn' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
