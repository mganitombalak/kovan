import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ComponentFactoryResolver } from '@angular/core';
import { ModalService } from '../services/modal/modal.service';
import { ModalBodyContainerDirective } from 'src/app/core/directives/modal-body-container.directive';
import { BaseModalComponent } from 'src/app/core/bases/base-modal-component';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterViewInit {
  @ViewChild('modal') modalContainer: ElementRef; // bu cagrilmadan ngViewAfterInit
  @ViewChild(ModalBodyContainerDirective) modalBodyContainer: ModalBodyContainerDirective;

  constructor(public modalService: ModalService, private componentFactoryResolver: ComponentFactoryResolver) { }
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.modalService.setup({ modalContainer: this.modalContainer, modalComponent: this });
  }

  onOpening(): void {
    if (this.modalBodyContainer) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.modalService.modalOptions.activeComponent);
      const componentRef = this.modalBodyContainer.containerRef.createComponent(componentFactory);
      (componentRef.instance as BaseModalComponent<any>).bind(
        {
          componentMode: this.modalService.modalOptions.componentMode,
          data: this.modalService.modalOptions.data
        }
      );
    }
  }

  onClosing(): void {
    this.modalBodyContainer.containerRef.clear();
  }

}
