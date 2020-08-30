import { FormGroup } from '@angular/forms';

export interface IFormly {
    form: FormGroup;
    model: IModel;
    fields: any[];
}

export interface IModel {
    search: string;
    section: ISelectOption;
}

export interface ISelectOption {
    id: string;
    label: string;
}