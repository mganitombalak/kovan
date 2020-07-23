import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { IndexComponent } from './components/index/index.component';
import { AgGridModule } from 'ag-grid-angular';
import { CategoryService } from './services/category.service';
import { ApiConfig } from '../../core/injection-token/api-config';
import { CommonComponentsModule } from '../shared/common-components/common-components.module';
import { ActionGridCellComponent } from '../shared/common-components/action-grid-cell/action-grid-cell.component';
import { UpsertComponent } from './components/upsert/upsert.component';
@NgModule({
  declarations: [IndexComponent, UpsertComponent],
  imports: [
    CategoryRoutingModule,
    CommonComponentsModule,
    AgGridModule.withComponents([ActionGridCellComponent])
  ],
  providers: [CategoryService,
    {
      provide: ApiConfig,
      useValue: { endPoint: 'category' }
    }
  ]
})
export class CategoryModule { }
