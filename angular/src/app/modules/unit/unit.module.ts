import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UnitRoutingModule } from './unit-routing.module';
import { IndexComponent } from './components/index/index.component';
import { UpsertComponent } from './components/upsert/upsert.component';


@NgModule({
  declarations: [IndexComponent, UpsertComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UnitRoutingModule
  ]
})
export class UnitModule { }
