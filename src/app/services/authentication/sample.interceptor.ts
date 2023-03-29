import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AuthRequestsService} from "./auth-requests.service";

@Injectable()
export class SampleInterceptor implements HttpInterceptor {


  constructor(private requestsService: AuthRequestsService ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(
        error => {
          return next.handle(request);
        }
      ));
  }

}
