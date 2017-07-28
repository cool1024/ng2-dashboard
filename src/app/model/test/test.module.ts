/*Angular*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/*Material*/
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdDialogModule } from '@angular/material';

/*ng2-charts*/
import { ChartsModule } from 'ng2-charts';

/*sortablejs*/
import { SortablejsModule } from 'angular-sortablejs';

/*引入路由模块*/
import { TestRoutingModule } from './test-routing.module'

/*引入对话组件*/
import { DialogDefault, DialogInfo, DialogSuccess, DialogWarning, DialogDanger } from './../../system/tool/dialog';

/*引入弹窗组件*/
import { AlertComponent } from './../../system/tool/alert/alert.component';

/*引入页面组件*/
import { ConfirmWindowComponent } from './pages/confirm-window/confirm-window.component';
import { AlertWindowComponent } from './pages/alert-window/alert-window.component';
import { ChartsDemoComponent } from './pages/charts-demo/charts-demo.component';
import { SortableDemoComponent } from './pages/sortable-demo/sortable-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TestRoutingModule,
    NoopAnimationsModule,
    MdDialogModule,
    MdButtonModule,
    ChartsModule,
    SortablejsModule,
  ],
  entryComponents: [DialogDefault, DialogInfo, DialogSuccess, DialogWarning, DialogDanger],
  declarations: [
    AlertComponent,
    DialogDefault, DialogInfo, DialogSuccess, DialogWarning, DialogDanger,
    /*pages list*/
    ConfirmWindowComponent,
    AlertWindowComponent,
    ChartsDemoComponent,
    SortableDemoComponent,
  ],
})
export class TestModule { }
