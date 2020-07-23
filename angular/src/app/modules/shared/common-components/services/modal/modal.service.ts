import { Injectable, RendererFactory2, Renderer2 } from '@angular/core';
import { IModalSetupOptions } from '../../../../../core/models/IModalSetupOptions';
import { IModalOptions } from '../../../../../core/models/IModalOptions';

@Injectable({ providedIn: 'root' })
export class ModalService {

  private modalSetupOptions: IModalSetupOptions;
  modalOptions: IModalOptions;
  private renderer: Renderer2;
  private backDrop: any;
  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.backDrop = this.renderer.createElement('div');
  }

  setup(setupOptions: IModalSetupOptions) {
    this.modalSetupOptions = setupOptions;
  }

  open(options: IModalOptions): void {
    this.modalOptions = options;
    this.modalSetupOptions.modalComponent.onOpening();
    this.renderer.addClass(document.body, 'modal-open');
    this.renderer.addClass(this.backDrop, 'modal-backdrop');
    this.renderer.addClass(this.backDrop, 'fade');
    this.renderer.appendChild(document.body, this.backDrop);
    this.renderer.setStyle(this.modalSetupOptions.modalContainer.nativeElement, 'display', 'block');
    setTimeout(() => this.renderer.addClass(this.modalSetupOptions.modalContainer.nativeElement, 'show'), 100);
    // setTimeout(() => this.renderer.addClass(this.backDrop, 'show'), 200);
  }
  close(): void {
    this.modalSetupOptions.modalComponent.onClosing();
    this.renderer.removeClass(document.body, 'modal-open');
    this.renderer.setStyle(this.modalSetupOptions.modalContainer.nativeElement, 'display', 'none');
    this.renderer.removeClass(this.backDrop, 'show');
    setTimeout(() => this.renderer.removeChild(document.body, this.backDrop, false), 200);
    setTimeout(() => this.renderer.removeClass(this.modalSetupOptions.modalContainer.nativeElement, 'show'), 200);
  }
}
