import { Component, OnInit } from '@angular/core';
import { FormCheckService } from './../../../../system/services/form-check.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.scss'],
  providers: [FormCheckService]
})
export class FormDemoComponent implements OnInit {

  constructor(private formCheckService: FormCheckService, private http: Http) { }

  ngOnInit() { }

  //price check to valid
  toPrice(price: string) {
    return this.formCheckService.getPrice(price)
  }

  //submit
  doSubmit() {
    console.log(this.form)
  }

  submitForm(btn: any) {
    setTimeout(_ => {
      btn.complete = true
    }, 2000)
  }

  //disabled the input
  disabled = false;

  //form data
  form: any = {}

}
