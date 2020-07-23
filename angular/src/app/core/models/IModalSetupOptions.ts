import { ElementRef } from '@angular/core';
import { ModalComponent } from '../../modules/shared/common-components/modal/modal.component';
export interface IModalSetupOptions {
    modalContainer: ElementRef;
    modalComponent: ModalComponent;
}