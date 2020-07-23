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
                .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImRkNmNhY2IzLTMzNTQtNDUwMC04ODEyLWYwYjQ4NWY4YjRlNCIsImVtYWlsIjoibWdhbmkudG9tYmFsYWtAeWFob28uY29tIiwicm9sZSI6Im51bGwiLCJuYmYiOjE1OTU1MDI1MTcsImV4cCI6MTU5NTUwMzQxNywiaWF0IjoxNTk1NTAyNTE3fQ.5VtOW2JaTW_5eR51-h_9UUgdEuypMvGYi__wOll7Df8')
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