import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  docs = [
    `
    //发送一个不带参数的get请求
    url(url: string): Observable<any> 
  
    //发送一个get请求
    get(url: string, params: any = {}): Observable<any>
  
    //发送一个post请求
    post(url: string, params: any = {}): Observable<any>
  
    //发送一个delete请求
    delete(url: string, params: any = {}): Observable<any>
  
    //发送一个put请求
    put(url: string, params: any = {}): Observable<any>
  
    //发送一个post请求(可以附带文件)，params为普通参数，files为上传的文件，name为文件的在表单中对应的name,files为文件列表，不论文件是否为1个或多个，都用数组形式
    file(url: string, params: any = {}, files = new Array<{ name: string, files: Array<Blob> }>()): Observable<any>
    `,
    `
    //要使用finally方法需要引入拓展包
    import 'rxjs/add/operator/finally';
    .....    

    let obs = this.requestService.url('/test/api')

    obs.finally(()=>{.....请求结束后执行.....}).subscribe(res=>{
      if(res.result){
        //接口调用成功
      }
    })
    `
  ]

}
