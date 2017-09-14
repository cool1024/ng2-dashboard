import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lumen',
  templateUrl: './lumen.component.html',
  styleUrls: ['./lumen.component.scss']
})
export class LumenComponent implements OnInit {

  constructor() { }

  ngOnInit() { }


  //文档数据
  docs = [
    `
  //参数校验（只能用于API测试，禁止用于生产环境）
  $app->post('/valid/test', function (ApiContract $api) {
      return $api->getParams(['email:email', 'password:min:8|max:12']);
  });
  `
  ]
}
