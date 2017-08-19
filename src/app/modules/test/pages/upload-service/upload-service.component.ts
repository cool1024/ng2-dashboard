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

  html_code=`
    <app-image-input-form (onChange)="file=$event.file"></app-image-input-form>
    <div class="mt-1">
      <button (click)="tryUploadFile()" class="btn btn-success"><i class="fa fa-check fa-fw"></i>Upload File</button>
    </div>
  `

  ts_code=`
    import { RequestService } from '<path>/system/services/request.service';
    
    ......

    file: Blob

    constructor(private requestService: RequestService) { }

    tryUploadFile(){
       this.requestService.file('/upload/image ', { image:file }).subscribe()
    }    

  `
}
