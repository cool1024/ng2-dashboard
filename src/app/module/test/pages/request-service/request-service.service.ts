import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RequestService } from './../../../../system/service/request.service';

@Injectable()
export class RequestServiceService {

  constructor(private requestService: RequestService) { }

  //test get request whithout any params
  get testUrl(): Observable<any> {
    return this.requestService.url('/assets/json/url.json')
  }

}
