import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExampleRoutingModule } from './example.routing';
import { DatepickerComponent } from './pages/datepicker/datepicker.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ExampleRoutingModule,
    NgbDatepickerModule.forRoot(),
  ],
  declarations: [DatepickerComponent]
})
export class ExampleModule { }
