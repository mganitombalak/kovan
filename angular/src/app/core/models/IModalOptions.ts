import { Type } from '@angular/core';
import { ComponentMode } from '../enums/component-mode';
export interface IModalOptions {
    title: string;
    activeComponent: Type<any>;
    componentMode: ComponentMode;
    data: any;
}
