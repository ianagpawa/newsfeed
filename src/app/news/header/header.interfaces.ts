import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

export namespace Header {
    export interface IFormly {
        form: FormGroup;
        model: IModel;
        fields: any[];
    }
    
    export interface IModel {
        search: string;
        sources: ISelectOption[];
    }

    export interface ISelectOption {
        value: string;
        label: string;
    }
}