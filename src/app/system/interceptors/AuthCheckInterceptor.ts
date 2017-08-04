import { HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthCheckInterceptor implements HttpInterceptor {
    constructor(private toastrService:ToastrService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req).map(response => {
            if (response instanceof HttpResponse) {
                if (response.status == 401){
                    this.toastrService.warning('AUTH ERROR','Woops!')
                }
            }
            return response
        })
    }
}