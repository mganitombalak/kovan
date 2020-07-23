import { ComponentMode } from '../enums/component-mode';
import { IModalComponentBindingOptions } from '../models/IModelComponentBindingOptions';

export class BaseModalComponent<T>{
    actionButtonText: string;
    model: T;
    componentMode: ComponentMode;
    bind(options: IModalComponentBindingOptions<T>): void {
        this.model = options.data ? options.data : {} as T;
        this.componentMode = options.componentMode;
        this.actionButtonText =
            this.componentMode === ComponentMode.Insert ? 'Kaydet' :
                this.componentMode === ComponentMode.Edit ? 'Güncelle' :
                    this.componentMode === ComponentMode.Delete ? 'Sil' : '';
    }
}