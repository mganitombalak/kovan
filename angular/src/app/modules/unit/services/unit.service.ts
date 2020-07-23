import { Injectable, Optional, Inject } from '@angular/core';
import { BaseService } from 'src/app/core/bases/base-service';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from 'src/app/core/injection-token/api-config';
import { IApiConfig } from 'src/app/core/models/IApiConfig';
import { IUnit } from '../../../core/models/IUnit';
@Injectable({
  providedIn: 'root'
})
export class UnitService extends BaseService<IUnit> {
  constructor(protected httpClient: HttpClient, @Optional() @Inject(ApiConfig) protected apiConfig: IApiConfig) {
    super(httpClient, apiConfig);
  }
}
