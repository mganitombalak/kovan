import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  columnDefs = [
    { headerName: 'Make', field: 'make', sortable: true },
    { headerName: 'Model', field: 'model', sortable: true },
    { headerName: 'Price', field: 'price', sortable: true }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];

  ngOnInit(): void {
  }

}
