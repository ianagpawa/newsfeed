import { FormlyFieldConfig } from '@ngx-formly/core';

export const FORMLY_FIELDS: FormlyFieldConfig[] = [
    {
      key: 'search',
      type: 'input',
      templateOptions: {
        label: 'Search',
        placeholder: 'Search',
        required: true,
      }
    },
    {
      key: "sources",
      type: "select",
      templateOptions: {
        label: "News Sources",
        valueProp: "value",
        options: [{
          value: 'techcrunch',
          label: "Tech Crunch"
        }, {
          value: 'bloomberg',
          label: "Bloomberg"
        }]
      }    
    }
]