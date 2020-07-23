import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { cannotHaveSameValue } from '../../../../core/validators/not-same-value';
import { BaseModalComponent } from 'src/app/core/bases/base-modal-component';
import { IUnit } from 'src/app/core/models/IUnit';
@Component({
  selector: 'app-upsert',
  templateUrl: './upsert.component.html',
  styleUrls: ['./upsert.component.scss']
})
export class UpsertComponent extends BaseModalComponent<IUnit> implements OnInit {

  // upsertForm = new FormGroup({
  //   name: new FormControl('', [Validators.required, Validators.maxLength(5)]),
  //   shortForm: new FormControl('')
  // });
  upsertForm = this.formBuilder.group({
    name: [''],
    shortForm: [''],
    dynamic: this.formBuilder.array([], cannotHaveSameValue())
  });

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.upsertForm.valueChanges.subscribe(r => {
      console.log(`${r} status:${this.upsertForm.status}`);
    });
  }

  onSubmit(): void {
    console.log(this.upsertForm.status);
  }

  getDynamicControls = (): FormArray => this.upsertForm.get('dynamic') as FormArray;

  onClick(): void {
    this.getDynamicControls().push(this.formBuilder.control('', [Validators.required, Validators.maxLength(3)]));
  }
}
