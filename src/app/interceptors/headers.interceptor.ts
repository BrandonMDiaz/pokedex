import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/localStorage/local-storage.service';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor(private localStorage: LocalStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const newRequest = request.clone({
      setHeaders: {
        'x-token': `${this.localStorage.get(environment.jwtKey)}`,
      },
    });
    return next.handle(newRequest);
  }
}
