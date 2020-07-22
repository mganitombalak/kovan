import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { IndexComponent } from './components/index/index.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    AgGridModule.withComponents([])
  ]
})
export class CategoryModule { }
