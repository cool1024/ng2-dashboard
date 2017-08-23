import { Injectable } from '@angular/core';
import { RequestService } from './../../services/request.service';
import { ApiData } from './../../class/api';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RoleManagerService {

  constructor(private req: RequestService) { }

  getRoles(params: any): Observable<ApiData> {    
    return this.req.get('/role/search', params);
  }
}
