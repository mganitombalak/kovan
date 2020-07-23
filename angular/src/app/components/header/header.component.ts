import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // headerSearch: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  // this.headerSearch = this.formBuilder.group([{

  // }]);
  }

}
