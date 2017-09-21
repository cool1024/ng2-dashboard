import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

/*ngx-toastr module*/
import { ToastrModule } from 'ngx-toastr';

/*ng-bootstrap*/
import { NgbModalModule, NgbDatepickerModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

/*froala-editor*/
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

/*routing module*/
import { AppRoutingModule } from './app.routing';

/*system module*/
import { SystemModule } from './../dashboard/system.module';

/*global interceptors*/
import { ErrorCheckInterceptor } from './../dashboard/interceptors/ErrorCheckInterceptor';
import { HeaderInterceptor } from './../dashboard/interceptors/HeaderInterceptor';

/*public system service*/
import { SystemService } from './../dashboard/system.service';
import { SessionService } from './../dashboard/services/session.service';
import { LocalService } from './../dashboard/services/local.service';
import { StorageService } from './../dashboard/services/storage.service';
import { RequestService } from './../dashboard/services/request.service';
import { AuthService } from './../dashboard/services/auth.service';

/*app component*/
import { AppComponent } from './app.component';

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

    /*public interceptor*/
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorCheckInterceptor, multi: true },

    //material default setting
    { provide: LOCALE_ID, useValue: 'zh-cn' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
