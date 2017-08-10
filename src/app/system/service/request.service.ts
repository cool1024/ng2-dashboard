import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RequestService {

  constructor(private httpClient: HttpClient) { }

  //a get request without any params
  url(url: string): Observable<any> {
    return this.httpClient.get(url)
  }

  get(url: string, params: any = {}): Observable<any> {
    return this.httpClient.get(url + this.parse(params))
  }

  post(url: string, params: any = {}): Observable<any> {
    return this.httpClient.post(url, params)
  }

  delete(url: string, params: any = {}): Observable<any> {
    return this.httpClient.delete(url + this.parse(params))
  }

  put(url: string, params: any = {}): Observable<any> {
    return this.httpClient.put(url, params)
  }

  private getParams(params: any): HttpParams {
    let httpParams = new HttpParams()
    for (let key in params) {
      httpParams.set(key, params[key])
    }
    return httpParams
  }

  private parse(json: any): string {
    let key: any;
    let query: string[] = new Array<string>()
    let str = ""
    for (key in json) {
      query.push(key + "=" + json[key])
    }
    str = query.join('&')
    return str == "" ? str : '?' + str
  }
}
