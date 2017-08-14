import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RequestService } from './../../../../system/service/request.service';

@Injectable()
export class UploadServiceService {

  constructor(private requestService: RequestService) { }

  tryUploadFile(file: Blob): Observable<any> {
    return this.requestService.file('/upload/image ', { image:file });
  }

}
