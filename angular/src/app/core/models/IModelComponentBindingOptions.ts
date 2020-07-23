import { ComponentMode } from "../enums/component-mode";

export interface IModalComponentBindingOptions<T> {
    componentMode: ComponentMode;
    data: T;
}