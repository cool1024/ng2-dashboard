import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

/*Material*/
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MdDialogModule } from '@angular/material';

/*sortablejs*/
import { SortablejsModule } from 'angular-sortablejs';

/*引入对话组件*/
import { DialogDefault, DialogInfo, DialogSuccess, DialogWarning, DialogDanger } from './components/dialog';

/*引入弹窗组件*/
import { AlertComponent } from './components/alert/alert.component';

/*Pagination*/
import { PaginationComponent } from './components/pagination/pagination.component';

/*image input form*/
import { ImageInputFormComponent } from './components/image-input-form/image-input-form.component';
import { ImageInputUploadComponent } from './components/image-input-upload/image-input-upload.component';
import { ImagesInputFormComponent } from './components/images-input-form/images-input-form.component';
import { ImagesInputUploadComponent } from './components/images-input-upload/images-input-upload.component';

@NgModule({
  imports: [
    CommonModule,
    NoopAnimationsModule,
    MdDialogModule,
    HttpModule,
    SortablejsModule,
  ],
  entryComponents: [DialogDefault, DialogInfo, DialogSuccess, DialogWarning, DialogDanger],
  declarations: [
    AlertComponent,
    PaginationComponent,
    DialogDefault, DialogInfo, DialogSuccess, DialogWarning, DialogDanger,
    ImageInputFormComponent,
    ImageInputUploadComponent,
    ImagesInputFormComponent,
    ImagesInputUploadComponent,
  ],
  exports: [
    AlertComponent,
    PaginationComponent,
    DialogDefault, DialogInfo, DialogSuccess, DialogWarning, DialogDanger,
    ImageInputFormComponent,
    ImageInputUploadComponent,
    ImagesInputFormComponent,
    ImagesInputUploadComponent,
  ]
})
export class ToolModule { }
