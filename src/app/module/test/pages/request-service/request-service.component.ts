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
}
