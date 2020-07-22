import { Injectable } from '@angular/core';
import { BaseService } from '../../../core/bases/base-service';
import { ICategory } from '../../../core/models/ICategory';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class CategoryService extends BaseService<ICategory> {
  constructor(protected httpClient: HttpClient) {
    super(httpClient);
    this.serviceEndPoint = 'category';
  }
}
