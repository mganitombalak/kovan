import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { cannotHaveSameValue } from '../../../../core/validators/not-same-value';
@Component({
  selector: 'app-upsert',
  templateUrl: './upsert.component.html',
  styleUrls: ['./upsert.component.scss']
})
export class UpsertComponent implements OnInit {

  // upsertForm = new FormGroup({
  //   name: new FormControl(''),
  //   shortForm: new FormControl('')
  // });
  upsertForm = this.formBuilder.group({
    name: [''],
    shortForm: [''],
    dynamic: this.formBuilder.array([], [Validators.required, cannotHaveSameValue()])
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.upsertForm.valueChanges.subscribe(r => {
      console.log(r);
    });
  }

  onSubmit(): void {
    console.log(this.upsertForm.status);
  }

  getDynamicControls = (): FormArray => this.upsertForm.get('dynamic') as FormArray;

  onClick(): void {
    this.getDynamicControls().push(this.formBuilder.control('', [Validators.required, cannotHaveSameValue()]));
  }
}

