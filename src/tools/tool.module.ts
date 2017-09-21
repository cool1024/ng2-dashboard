import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/*Material*/
import { MdDialogModule } from '@angular/material';

/*SyntaxHighlighter*/
import 'assets/prism/prism.js';

/*sortablejs*/
import { SortablejsModule } from 'angular-sortablejs';

/*引入对话组件*/
import { DialogDefault, DialogInfo, DialogSuccess, DialogWarning, DialogDanger } from './components/dialog';

/*引入弹窗组件*/
import { AlertComponent } from './components/alert/alert.component';

/*Pagination*/
import { PaginationComponent } from './components/pagination/pagination.component';

/*pipe list*/
import { TreeParentPipe } from './pipes/tree-parent.pipe';

/*directive list*/
import { ButtonLoadingDirective } from './directives/button-loading.directive';
import { ImageLoadingDirective } from './directives/image-loading.directive';

/*tool components*/
import { ImageInputFormComponent } from './components/image-input-form/image-input-form.component';
import { ImageInputUploadComponent } from './components/image-input-upload/image-input-upload.component';
import { ImagesInputFormComponent } from './components/images-input-form/images-input-form.component';
import { ImagesInputUploadComponent } from './components/images-input-upload/images-input-upload.component';
import { TreeComponent } from './components/tree/tree.component';
import { CodePadComponent } from './components/code-pad/code-pad.component';
import { ModalComponent } from './components/modal/modal.component';
import { VideoInputFormComponent } from './components/video-input-form/video-input-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdDialogModule,
    HttpModule,
    SortablejsModule,
  ],
  entryComponents: [DialogDefault, DialogInfo, DialogSuccess, DialogWarning, DialogDanger],
  declarations: [

    //components
    AlertComponent,
    PaginationComponent,
    DialogDefault, DialogInfo, DialogSuccess, DialogWarning, DialogDanger,
    ImageInputFormComponent,
    ImageInputUploadComponent,
    ImagesInputFormComponent,
    ImagesInputUploadComponent,
    TreeComponent,
    CodePadComponent,
    ModalComponent,
    VideoInputFormComponent,

    //pipes
    TreeParentPipe,

    //directives
    ButtonLoadingDirective,
    ImageLoadingDirective,
  ],
  exports: [
    AlertComponent,
    PaginationComponent,
    DialogDefault, DialogInfo, DialogSuccess, DialogWarning, DialogDanger,
    ImageInputFormComponent,
    ImageInputUploadComponent,
    ImagesInputFormComponent,
    ImagesInputUploadComponent,
    TreeComponent,
    CodePadComponent,
    ModalComponent,
    VideoInputFormComponent,
    ButtonLoadingDirective,
    ImageLoadingDirective,
  ]
})
export class ToolModule { }
