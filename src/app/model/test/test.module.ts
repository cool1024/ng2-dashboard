/*Angular*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/*Material*/
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdDialogModule } from '@angular/material';

/*引入路由模块*/
import { TestRoutingModule } from './test-routing.module'

/*引入对话组件*/
import { DialogDefault, DialogInfo, DialogSuccess, DialogWarning, DialogDanger } from './../../system/tool/dialog';

/*引入弹窗组件*/
import { AlertComponent } from './../../system/tool/alert/alert.component';

/*引入页面组件*/
import { ConfirmWindowComponent } from './pages/confirm-window/confirm-window.component';
import { AlertWindowComponent } from './pages/alert-window/alert-window.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TestRoutingModule,
    NoopAnimationsModule,
    MdDialogModule,
    MdButtonModule,
  ],
  entryComponents: [DialogDefault, DialogInfo, DialogSuccess, DialogWarning, DialogDanger],
  declarations: [
    AlertComponent,
    DialogDefault, DialogInfo, DialogSuccess, DialogWarning, DialogDanger,
    /*pages list*/
    ConfirmWindowComponent,
    AlertWindowComponent
  ],
})
export class TestModule { }
