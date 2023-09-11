import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { statusCode } from '../enums/status-code';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  static accessToken = '';
  constructor(private http: HttpClient) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    debugger
    return next.handle(request).pipe(catchError((err: HttpErrorResponse) => {
      if (err.status === statusCode.statusCode401) {
      }
      return throwError(() => err);
    }));
  }
}
