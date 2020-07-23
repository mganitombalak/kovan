import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UnitRoutingModule } from './unit-routing.module';
import { IndexComponent } from './components/index/index.component';
import { UpsertComponent } from './components/upsert/upsert.component';
import { ActionGridCellComponent } from '../shared/common-components/action-grid-cell/action-grid-cell.component';
import { ApiConfig } from 'src/app/core/injection-token/api-config';
import { AgGridModule } from 'ag-grid-angular';
import { CommonComponentsModule } from '../shared/common-components/common-components.module';
import { UnitService } from './services/unit.service';

@NgModule({
  declarations: [IndexComponent, UpsertComponent],
  imports: [
    CommonComponentsModule,
    ReactiveFormsModule,
    UnitRoutingModule,
    AgGridModule.withComponents([ActionGridCellComponent])
  ],
  providers: [UnitService, {
    provide: ApiConfig,
    useValue: { endPoint: 'unit' }
  }]
})
export class UnitModule { }
