import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: Event) {
    this.renderer.addClass(this.element.nativeElement, 'active');
    //console.log(`mouse enter:${this.element.nativeElement.id}`);
  }
  @HostListener('mouseleave', ['$event'])
  onMouseLeave() {
    this.renderer.removeClass(this.element.nativeElement, 'active');
    //console.log(`mouse leave:${this.element.nativeElement.id}`);
  }

}
