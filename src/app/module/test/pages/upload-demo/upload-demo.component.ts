import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-upload-demo',
  templateUrl: './upload-demo.component.html',
  styleUrls: ['./upload-demo.component.scss']
})
export class UploadDemoComponent implements OnInit {

  constructor(private httpClient: HttpClient, private toastrService: ToastrService) { }

  ngOnInit() { }

  file: any = new Blob()

  uploadProgress: number = 0

  tryUpload() {
    this.uploadProgress = 0
    let formData = new FormData()
    formData.append('image', this.file)
    this.httpClient.request(new HttpRequest('POST', '/admin/login', formData, { reportProgress: true })).subscribe(event => {
      if (event.type == HttpEventType.UploadProgress) {
        console.log(event.loaded / event.total)
        this.uploadProgress = Math.round(100 * event.loaded / event.total)
      }
      if (event.type == HttpEventType.Response) {
        this.toastrService.info('upload finished ...', 'notice')
        console.log(event.body)
      }
    })
  }

  getFile($event) {
    console.log($event)
  }

  getFiles($event) {
    console.log($event)
  }

  image: string = "http://cool1024.com/images/article/svg/angular.svg"

  uploadConfig: any = {
    upload: (file: Blob, callback: Function) => {
      setTimeout(_ => callback(true), 2000)
    }
  }
}
