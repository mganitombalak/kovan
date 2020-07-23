import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ICategory } from 'src/app/core/models/ICategory';
import { take } from 'rxjs/operators';
import { ActionGridCellComponent } from 'src/app/modules/shared/common-components/action-grid-cell/action-grid-cell.component';
import { ModalService } from 'src/app/modules/shared/common-components/services/modal/modal.service';
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
    { headerName: 'Display Order', field: 'displayOrder', sortable: true },
    { headerName: 'Active?', field: 'isActive', sortable: true },
    { headerName: 'Action', cellRendererFramework: ActionGridCellComponent }
  ];
  context: any;
  rowData: Array<ICategory>;

  constructor(private categoryService: CategoryService, private modalService: ModalService) {
    this.context = { parentComponent: this };
  }
  ngOnInit(): void {
    this.categoryService.find().pipe(take(1)).subscribe(result => this.rowData = result.data);
  }

  onEditClicked(entity: ICategory): void {
    this.modalService.open({
      title: `Edit ${entity.name}`,
      activeComponent: UpsertComponent,
      componentMode: ComponentMode.Edit,
      data: entity
    });
    console.log(`${entity.name} Edit clicked`);
  }
  onDeleteClicked(entity: ICategory): void {
    this.modalService.open({
      title: `Delete ${entity.name}`,
      activeComponent: UpsertComponent,
      componentMode: ComponentMode.Delete,
      data: entity
    });
    console.log(`${entity.name} Delete clicked`);
  }
  onInfoClicked(entity: ICategory): void {
    this.modalService.open({
      title: `Info ${entity.name}`,
      activeComponent: UpsertComponent,
      componentMode: ComponentMode.Read,
      data: entity
    });
    console.log(`${entity.name} Info clicked`);
  }

}
