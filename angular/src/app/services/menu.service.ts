import { Injectable, Optional, Inject } from '@angular/core';
import { IMenuItem } from '../core/models/IMenuItem';
import { ApiConfig } from '../core/injection-token/api-config';
import { IApiConfig } from '../core/models/IApiConfig';
@Injectable({ providedIn: 'root' }) // platform | any | moduleName
export class MenuService {
  constructor() { }
  findAll(): Array<IMenuItem> {
    console.log(`Menu service has been called`);
    //MenuItem
    //[{title:'Kategori',url:'/category'},{title:'Birimler',url:'/units'}]
    return [{ title: 'Kategori', url: '/category' }, { title: 'Birimler', url: '/unit' }, { title: 'Urunler', url: '/products' }];
  }
}
