import { Injectable, Optional, Inject } from '@angular/core';
import { BaseService } from '../../../core/bases/base-service';
import { ICategory } from '../../../core/models/ICategory';
import { HttpClient } from '@angular/common/http';
import { IApiConfig } from 'src/app/core/models/IApiConfig';
import { ApiConfig } from 'src/app/core/injection-token/api-config';
@Injectable()
export class CategoryService extends BaseService<ICategory> {
  constructor(protected httpClient: HttpClient, @Optional() @Inject(ApiConfig) protected apiConfig: IApiConfig) {
    super(httpClient, apiConfig);
  }
}
