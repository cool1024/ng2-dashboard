import { HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthCheckInterceptor implements HttpInterceptor {
    constructor(private toastrService: ToastrService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).map(response => {
            console.log(response)
            if (response instanceof HttpResponse) {
                if (response.status == 401) {
                    this.toastrService.warning('AUTH ERROR', 'Woops!')
                }
                else if (response.status == 0) {
                    this.toastrService.error('NETWORK ERROR', 'Error!')
                }
                else if (response.status != 200) {
                    this.toastrService.error('SERVER ERROR', 'Error!')
                }
                else {

                    if (response.body.result != undefined) {

                        if (response.body.result == false) {
                            this.toastrService.warning(response.body.message || 'API DATA ERROR', 'Warning')
                        }
                    }
                    else {
                        this.toastrService.error('API DATA ERROR', 'Error!')
                    }
                }
            }
            return response
        })
    }
}