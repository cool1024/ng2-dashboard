import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApiData } from './../class/api'

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

  file(url: string, params: any = {}, files = new Array<{ name: string, files: Array<Blob> }>()): Observable<any> {
    return this.httpClient.post(url, this.getFormdata(params, files))
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

  private getFormdata(params: any, filesArray = new Array<{ name: string, files: Array<Blob> }>()) {
    let formdata = new FormData()
    for (let key in params) {
      formdata.append(key, params[key])
    }
    for (let key in filesArray) {
      let files = filesArray[key]
      for (let i = 0; i < files.files.length; i++) {
        formdata.append(files.name, files.files[i])
      }
    }
    return formdata
  }
}
