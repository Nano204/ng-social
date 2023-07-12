import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { LoginService } from '../../login/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const authToken = this.loginService.getAuthToken() || '';
    const config = {
      headers: request.headers.set('Authorization', authToken),
    };
    const authReq = request.clone(config);
    return next.handle(authReq).pipe(
      catchError((error) => {
        if (error.status === 401) {
          this.loginService.logout();
        }
        return throwError(() => error);
      })
    );
  }
}
