import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RequestService } from './../../../../system/service/request.service';

@Injectable()
export class RequestServiceService {

  constructor(private requestService: RequestService) { }

  //test get request whithout any params
  testUrl(): Observable<any> {
    return this.requestService.url('/assets/json/url.json')
  }

  testGet(params: any): Observable<any> {
    return this.requestService.get('/assets/json/get.json', params)
  }

  testDelete(params: any): Observable<any> {
    return this.requestService.delete('/assets/json/get.json', params)
  }

  testPut(params: any): Observable<any> {
    return this.requestService.put('/assets/json/get.json', params)
  }

  testPost(params: any): Observable<any> {
    return this.requestService.post('/assets/json/get.json', params)
  }
}
