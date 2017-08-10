import { HttpRequest, HttpHandler, HttpHeaders, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Config, StorageSetting, StorageType } from './../../config/config';
import { SessionService } from './../service/session.service';
import { LocalService } from './../service/local.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

    constructor(private sessionService: SessionService, private localService: LocalService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let headers = {}
        if (StorageSetting.tokensSaveMethod == StorageType.localStorage) {
            headers = this.localService.getToken()

        }
        if (StorageSetting.tokensSaveMethod == StorageType.sessionStorage) {
            headers = this.sessionService.getToken()
        }
        req = req.clone({
            setHeaders: headers,
            url: Config.SERVER.server + req.url
        })
        return next.handle(req)
    }
}