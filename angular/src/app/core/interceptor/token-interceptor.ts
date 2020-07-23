import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const newRequestObject = req.clone({
            headers: req.headers
                .set('content-type', 'application/json')
                .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
        });
        return next.handle(newRequestObject).pipe(
            catchError(err => {
                if (err.status === 401) {
                    // auth.logout() 
                }
                console.log(err);
                return throwError(err);
            }));
    }
}