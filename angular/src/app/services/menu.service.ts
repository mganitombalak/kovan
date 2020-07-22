import { Injectable } from '@angular/core';
import { IMenuItem } from '../core/models/IMenuItem';
@Injectable({ providedIn: 'root' }) // platform | any | moduleName
export class MenuService {
  constructor() { }
  findAll(): Array<IMenuItem> {
    console.log(`Menu service has been called`);
    //MenuItem
    //[{title:'Kategori',url:'/category'},{title:'Birimler',url:'/units'}]
    return [{ title: 'Kategori', url: '/category' }, { title: 'Birimler', url: '/unit' },{ title: 'Urunler', url: '/products' }];
  }
}