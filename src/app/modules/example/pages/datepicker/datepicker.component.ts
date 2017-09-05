import { Component, OnInit } from '@angular/core';
import { CustomDatepickerI18n, I18n } from './customdatepickerI18n.service';
import { NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [I18n, { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }]
})
export class DatepickerComponent implements OnInit {

  model;

  constructor() { }

  ngOnInit() {
  }

}
