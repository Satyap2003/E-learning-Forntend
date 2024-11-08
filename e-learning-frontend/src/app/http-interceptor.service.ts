import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from './admin/auth.service';

export const authInterceptorServiceInterceptor: HttpInterceptorFn = (
  req,
  next
) => {
  const authService = inject(AuthService);
  if (authService.loginuserData && authService.loginuserData.username && authService.loginuserData.password) {
    const basicAuth =
      'Basic ' +
      btoa(
        authService.loginuserData.username +
          ':' +
          authService.loginuserData.password
      ); //Token (enoded and addded basic as prefix as we are using the basic auth.)

      const modifiedReq =  req.clone({
        headers: req.headers.set('Authorization', basicAuth)
      });
      return next(modifiedReq);
  }
  return next(req);
};
