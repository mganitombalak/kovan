import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';
@Component({
  selector: 'app-action-grid-cell',
  templateUrl: './action-grid-cell.component.html',
  styleUrls: ['./action-grid-cell.component.scss']
})
export class ActionGridCellComponent implements AgRendererComponent {
  private parameters: any;
  refresh(params: any): boolean {
    return false;
  }
  agInit(params: ICellRendererParams): void {
    this.parameters = params;
  }
  afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
    this.parameters = params;
  }
  onEditClick(): void {
    this.parameters.context.parentComponent.onEditClicked(this.parameters.data);
  }
  onDeleteClick(): void {
    this.parameters.context.parentComponent.onDeleteClicked(this.parameters.data);
  }
  onInfoClick(): void {
    this.parameters.context.parentComponent.onInfoClicked(this.parameters.data);
  }
}
