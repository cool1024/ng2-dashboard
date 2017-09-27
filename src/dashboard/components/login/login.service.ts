import { Injectable } from '@angular/core';
import { RequestService } from './../../services/request.service';
import { ApiData } from './../../classes/api';
import { Observable } from 'rxjs/Observable';
import { LoginPageConfig } from './../../../config/login';

@Injectable()
export class LoginService {

  constructor(private requestService: RequestService) { }

  doLogin($params): Observable<ApiData> {
    return this.requestService.post(LoginPageConfig.apiUrl, $params)
  }

}
