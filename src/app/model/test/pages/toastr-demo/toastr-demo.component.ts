import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toastr-demo',
  templateUrl: './toastr-demo.component.html',
  styleUrls: ['./toastr-demo.component.scss']
})
export class ToastrDemoComponent implements OnInit {

  constructor(private toastrService: ToastrService) { }

  ngOnInit() {}

  showDanger(){
    this.toastrService.error('a danger message','danger')
  }
  
  showWarning(){
    this.toastrService.warning('a warning message','warning')
  }

  showInfo(){
    this.toastrService.info('a info message','info')
  }

  showSuccess(){
    this.toastrService.success('a success message','success')
  }
}
