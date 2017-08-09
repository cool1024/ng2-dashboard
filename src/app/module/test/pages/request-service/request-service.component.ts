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
    this.requestServiceService.testUrl.finally(() => { 
      console.log('finally')
    }).subscribe(
      res => this.urlResponseData = JSON.stringify(res),
      error => this.urlResponseData = JSON.stringify(error)
    )
  }

}
