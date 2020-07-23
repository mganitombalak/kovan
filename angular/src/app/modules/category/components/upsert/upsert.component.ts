import { Component, OnInit } from '@angular/core';
import { BaseModalComponent } from '../../../../core/bases/base-modal-component';
import { ICategory } from 'src/app/core/models/ICategory';
@Component({
  selector: 'app-upsert',
  templateUrl: './upsert.component.html',
  styleUrls: ['./upsert.component.scss']
})
export class UpsertComponent extends BaseModalComponent<ICategory> implements OnInit {

  constructor() {
    super();
   }

  ngOnInit(): void {
  }

}
