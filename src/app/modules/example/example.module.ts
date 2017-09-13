import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdButtonModule, MdCardModule } from '@angular/material';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { ExampleRoutingModule } from './example.routing';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerComponent } from './pages/datepicker/datepicker.component';
import { CardComponent } from './pages/card/card.component';
import { EditorComponent } from './pages/editor/editor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ExampleRoutingModule,
    NgbDatepickerModule.forRoot(),
    MdButtonModule, MdCardModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  declarations: [
    DatepickerComponent,
    CardComponent,
    EditorComponent,
    EditorComponent,
  ]
})
export class ExampleModule {
  constructor() {
    console.log(window);
  }
}
