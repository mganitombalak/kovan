import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appModalBodyContainer]'
})
export class ModalBodyContainerDirective {

  constructor(public containerRef: ViewContainerRef) { }

}
