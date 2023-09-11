import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonService } from '../services/common.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private commonService:CommonService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    debugger
    console.log(request)
    //let res = this.commonService.getCredencials();
    let token :any = localStorage.getItem("creds");
    let newToken = JSON.parse(token)
    if (newToken.token) {
      debugger
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${newToken.token}` }
      });
    } 
    return next.handle(request);

  }
}
