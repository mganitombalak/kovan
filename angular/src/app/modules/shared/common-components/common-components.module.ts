import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionGridCellComponent } from './action-grid-cell/action-grid-cell.component';
import { ModalComponent } from './modal/modal.component';
import { ModalBodyContainerDirective } from '../../../core/directives/modal-body-container.directive';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [ActionGridCellComponent, ModalComponent, ModalBodyContainerDirective],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CommonModule, FormsModule, ModalComponent, ActionGridCellComponent]
})
export class CommonComponentsModule { }
