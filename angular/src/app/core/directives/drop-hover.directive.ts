import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropHover]'
})
export class DropHoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: Event) {
    const container = this.element.nativeElement.querySelector('div.dropdown-menu');
    this.renderer.addClass(container, 'd-block');
    this.renderer.removeClass(container, 'd-none');
    //console.log(`mouse enter:${this.element.nativeElement.id}`);
  }
  @HostListener('mouseleave', ['$event'])
  onMouseLeave() {
    const container = this.element.nativeElement.querySelector('div.dropdown-menu');
    this.renderer.addClass(container, 'd-none');
    this.renderer.removeClass(container, 'd-block');
    //console.log(`mouse leave:${this.element.nativeElement.id}`);
  }

}
