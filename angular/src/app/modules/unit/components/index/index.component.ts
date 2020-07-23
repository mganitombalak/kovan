import { Component, OnInit } from '@angular/core';
import { ActionGridCellComponent } from 'src/app/modules/shared/common-components/action-grid-cell/action-grid-cell.component';
import { UnitService } from '../../services/unit.service';
import { take } from 'rxjs/operators';
import { ModalService } from 'src/app/modules/shared/common-components/services/modal/modal.service';
import { IUnit } from 'src/app/core/models/IUnit';
import { UpsertComponent } from '../upsert/upsert.component';
import { ComponentMode } from 'src/app/core/enums/component-mode';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  columnDefs = [
    { headerName: 'Name', field: 'name', sortable: true },
    { headerName: 'Short Form', field: 'shortForm', sortable: true },
    { headerName: 'Active?', field: 'isActive', sortable: true },
    { headerName: 'Action', cellRendererFramework: ActionGridCellComponent }
  ];
  context: any;
  rowData: Array<IUnit>;

  constructor(private unitService: UnitService, private modalService: ModalService) {
    this.context = { parentComponent: this };
  }
  ngOnInit(): void {
    this.unitService.find().pipe(take(1)).subscribe(result => this.rowData = result.data);
  }

  onEditClicked(entity: IUnit): void {
    this.modalService.open({
      title: `Edit ${entity.name}`,
      activeComponent: UpsertComponent,
      componentMode: ComponentMode.Edit,
      data: entity
    });
    console.log(`${entity.name} Edit clicked`);
  }
  onDeleteClicked(entity: IUnit): void {
    this.modalService.open({
      title: `Delete ${entity.name}`,
      activeComponent: UpsertComponent,
      componentMode: ComponentMode.Delete,
      data: entity
    });
    console.log(`${entity.name} Delete clicked`);
  }
  onInfoClicked(entity: IUnit): void {
    this.modalService.open({
      title: `Info ${entity.name}`,
      activeComponent: UpsertComponent,
      componentMode: ComponentMode.Read,
      data: entity
    });
    console.log(`${entity.name} Info clicked`);
  }
}