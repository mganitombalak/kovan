import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ICategory } from 'src/app/core/models/ICategory';
import {take} from 'rxjs/operators';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  columnDefs = [
    { headerName: 'Name', field: 'name', sortable: true },
    { headerName: 'Display Order', field: 'displayOrder', sortable: true },
    { headerName: 'Active?', field: 'isActive', sortable: true }
  ];

  rowData: Array<ICategory>;

  ngOnInit(): void {
    this.categoryService.find().pipe(take(1)).subscribe(result => this.rowData = result.data);
  }

}
