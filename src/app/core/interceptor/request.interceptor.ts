import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonService } from '../services/common.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private commonService: CommonService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // debugger
    // let res = this.commonService.getCredencials();
    // if (res.token) {
    //   debugger
    //   request = request.clone({
    //     setHeaders: { Authorization: `Bearer ${res.token}` }
    //   });
    // }
    return next.handle(request);
  }
}

