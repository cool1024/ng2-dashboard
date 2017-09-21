import { HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/timeout';
import { ToastrService } from 'ngx-toastr';
import { ApiData, ErrorMessages } from './../classes/api'

@Injectable()
export class ErrorCheckInterceptor implements HttpInterceptor {
    constructor(private toastrService: ToastrService, private router: Router) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).catch(error => {

            if (error.status == 401) {
                this.toastrService.warning(ErrorMessages.AUTH_ERROR, 'Woops!')
                this.router.navigateByUrl('/login')
            }
            else if (error.status == 0) {
                this.toastrService.error(ErrorMessages.NETWORK_ERROR, 'Error!')
            }
            else if (error.status == 404) {
                this.toastrService.error(ErrorMessages.NOTFOUND_ERROR, '404')
            }
            else {
                this.toastrService.error(ErrorMessages.SERVER_ERROR, error.status)
            }

            return Observable.of<any>(new ApiData(false, "request error", error))

        }).map(response => {

            if (response instanceof HttpResponse) {

                if (response.body != null && response.body.result != null) {
                    let apiData = new ApiData(response.body.result, response.body.message, response.body.datas)
                    if (apiData.result == false) {
                        this.toastrService.warning(apiData.message || ErrorMessages.API_DATA_ERROR, 'Warning')
                    }
                    response.clone({ body: apiData })
                }
                else {
                    this.toastrService.error(ErrorMessages.API_DATA_ERROR, 'Error!')
                    response = response.clone({ body: new ApiData(false, ErrorMessages.API_DATA_ERROR, response) })
                }

            }
            return response
        })
    }
}