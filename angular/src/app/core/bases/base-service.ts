import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { IBaseResponse } from '../models/IBaseResponse';
import { Optional, Inject } from '@angular/core';
import { ApiConfig } from '../injection-token/api-config';
import { IApiConfig } from '../models/IApiConfig';
export class BaseService<T> {
    serviceEndPoint: string;
    constructor(protected httpClient: HttpClient, protected apiConfig: IApiConfig) { }
    find(): Observable<IBaseResponse<T>> {
        // const httpOptions = {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json',
        //         Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImRkNmNhY2IzLTMzNTQtNDUwMC04ODEyLWYwYjQ4NWY4YjRlNCIsImVtYWlsIjoibWdhbmkudG9tYmFsYWtAeWFob28uY29tIiwicm9sZSI6Im51bGwiLCJuYmYiOjE1OTU0MjAyMDksImV4cCI6MTU5NTQyMTEwOSwiaWF0IjoxNTk1NDIwMjA5fQ.NomqJQEhHCMmOT9DK5Xv4IxxBAnt1mpcLheDHu9r148'
        //     })
        // };
        // return this.httpClient.get(`${environment.baseUrl}${this.serviceEndPoint}`, httpOptions) as Observable<IBaseResponse<T>>;

        return this.httpClient.get(`${environment.baseUrl}${this.apiConfig.endPoint}`) as Observable<IBaseResponse<T>>;
    }
    create(): void {
        return;
    }
    update(): void {
        return;
    }
    delete(): void {
        return;
    }
}