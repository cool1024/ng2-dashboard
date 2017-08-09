import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RequestService {

  constructor(private httpClient: HttpClient) { }

  url(url: string): Observable<any> {
    return this.httpClient.get(url)
  }
}
