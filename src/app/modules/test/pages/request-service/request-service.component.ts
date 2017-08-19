import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from './request-service.service';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-request-service',
  templateUrl: './request-service.component.html',
  styleUrls: ['./request-service.component.scss'],
  providers: [RequestServiceService]
})
export class RequestServiceComponent implements OnInit {

  constructor(private requestServiceService: RequestServiceService) { }

  ngOnInit() { }

  //try a get request without send any params
  urlResponseData: any

  //默认单图地址
  imageUrl = "http://cool1024.com/images/article/svg/angular.svg"

  //默认多图地址
  imagesUrl = "http://cool1024.com/images/article/svg/angular.svg,http://cool1024.com/flat-ui/img/box-image/newyear.jpg,http://cool1024.com/flat-ui/img/box-image/message.jpg"

  //上传单图图片文件
  imageFile: {file:Blob,image:string}

  //上传多图组件数据
  imageFiles = new Array<{ type: string, file: Blob, url: string }>()


  tryUrlRequest() {
    this.requestServiceService.testUrl().finally(() => { console.log('finally do ...') }).subscribe(res => console.log(res))
  }

  tryGetRequest() {
    //this.requestServiceService.testGet({ id: 1 }).finally(() => { }).subscribe(res => console.log())
    this.requestServiceService.testGet({ id: 1 }).subscribe(res => console.log(res))
  }

  tryPutRequest() {
    this.requestServiceService.testPut({ id: 1 }).subscribe(res => console.log(res))
  }

  tryPostRequest() {
    this.requestServiceService.testPost({ id: 1 }).subscribe(res => console.log(res))
  }

  tryDeleteRequest() {
    this.requestServiceService.testDelete({ id: 1 }).subscribe(res => console.log(res))
  }

  //测试上传文件（单文件与多文件并附带参数）,文件上传请求类型为POST
  tryUploadRequest() {

    //提交的数据(单图，简单参数)
    let params: any = {}

    //提交的数据（多图）
    let filesParams = new Array<{ name: string, files: Array<Blob> }>()

    //如果单图控件选择了文件
    if (this.imageFile != null) {
      params.imageFile = this.imageFile.file
    }

    //提取多图上传组件中的数据

    //链接图片
    let urls = new Array<string>()

    //文件图片
    let files = new Array<Blob>()

    this.imageFiles.forEach(e => {
      if (e.type == 'url') {
        urls.push(e.url)
      }
      else {
        files.push(e.file)
      }
    })

    //如果需要提交多图
    if (files.length > 0) {
      filesParams.push({ name: "imageFiles[]", files: files })
    }
    //如果存在图片链接
    if (urls.length > 0) {
      params.imagesUrl = urls.join()
    }

    //提交数据
    this.requestServiceService.testFile(params, filesParams).subscribe()
  }

  html_code = `
    <button (click)="tryUrlRequest()" class="btn btn-secondary mb-2">测试get请求</button>
  `

  ts_code = `
    //为组件创建服务testservice.ts
    import { Injectable } from '@angular/core';
    import { Observable } from 'rxjs/Observable';
    import { RequestService } from '<path>/system/services/request.service';

    @Injectable()
    export class TestService {

      constructor(private requestService: RequestService) { }

      testUrl(): Observable<any> {
        return this.requestService.url('/assets/json/url.json')
      }
    }

    //使用服务的组件test.component.ts
    import { Component, OnInit } from '@angular/core';
    import { TestService } from './testservice.service';
    import 'rxjs/add/operator/finally';//如果需要使用finally方法，引入该库

    @Component({
      selector: 'app-test',
      templateUrl: './test.component.html',
      styleUrls: ['./test.component.scss'],
      providers: [TestService]//注入此服务
    })

    export class TestComponent implements OnInit {

      constructor(private testService: TestService) { }

      ngOnInit() { }

      tryUrlRequest() {
        this.testService.testUrl().finally(() => { console.log('finally do ...') }).subscribe(res => console.log(res))
      }
    }
  `
}
