import { Component, OnInit } from '@angular/core';
import { UploadServiceService } from './upload-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-upload-service',
  templateUrl: './upload-service.component.html',
  styleUrls: ['./upload-service.component.scss'],
  providers: [UploadServiceService]
})
export class UploadServiceComponent implements OnInit {

  constructor(private uploadServiceService: UploadServiceService,private toastrService:ToastrService) { }

  ngOnInit() { }

  tryUploadFile() {
    console.log(this.file)
    if (!!this.file) {
      this.uploadServiceService.tryUploadFile(this.file).subscribe(res=>this.toastrService.info(res.datas,'200'))
    }
  }

  file: Blob

}
