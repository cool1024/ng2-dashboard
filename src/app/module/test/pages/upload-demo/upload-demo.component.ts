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
    formData.append('file', this.file)
    this.httpClient.request(new HttpRequest('POST', '/upload/file', formData, { reportProgress: true })).subscribe(event => {
      if (event.type == HttpEventType.UploadProgress) {
        console.log(event.loaded / event.total)
        this.uploadProgress = Math.round(100 * event.loaded / event.total)
      }
      if (event.type == HttpEventType.Response) {
        this.toastrService.info('upload finished ...', 'notice')
        console.log(event)
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

  images: string = "http://cool1024.com/images/article/svg/angular.svg,http://cool1024.com/flat-ui/img/box-image/newyear.jpg,http://cool1024.com/flat-ui/img/box-image/message.jpg"

  uploadConfig: any = {
    upload: (file: Blob, callback: Function) => {
      setTimeout(_ => callback(true), 2000)
    }
  }

  html_code_sigle = `
    <!--onChange事件将会在用户选择新图片/清空选择图片时触发，此时记录当前选中的图片-->
    <app-image-input-form [image]="image" (onChange)="file=$event"></app-image-input-form>
  `

  ts_code_sigle = `
    //默认图片地址，如修改前的原图片链接
    image="http://cool1024.com/images/article/svg/angular.svg"

    //选中的文件，默认为null
    file:Blob

    //确认提交
    doSubmit(){
      //提交代码此处不写，详情查看内置服务-发送请求
    }
  `
  html_code_multi = `
    <!--onChange事件将会在用户添加/清空/排序图片时触发-->
    <app-images-input-form [images]="images" (onChange)="getFiles($event)"></app-images-input-form>
  `

  ts_code_multi = `
    //默认图片地址，如修改前的原图片链接，图片地址用 ， 隔开
    images: string = "http://cool1024.com/images/article/svg/angular.svg,http://cool1024.com/flat-ui/img/box-image/newyear.jpg,http://cool1024.com/flat-ui/img/box-image/message.jpg"

    //获取组件中的图片列表
    getFiles(imageArray) {

      //链接图片
      let urls = new Array<string>()

      //文件图片
      let files = new Array<Blob>()

      imageArray.forEach(e => {
        if (e.type == 'url') {
          urls.push(e.url)
        }
        else {
          files.push(e.file)
        }
      })
    }
  `
}
