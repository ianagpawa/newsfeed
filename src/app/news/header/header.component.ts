import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MenuItem } from 'primeng/api';

import { IFormly, ISelectOption } from './header.interfaces';
import { FORMLY_FIELDS } from './header.config';
import { NYTimesApiService } from '../nytimes-api/nytimes-api.service';
import { SECTIONS } from '../nytimes-api/nytimes.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  formly: IFormly;
  items: MenuItem[];

  constructor(private nyTimesAPIService: NYTimesApiService) { }

  ngOnInit(): void { this.initialize(); }

  initialize(): void {
    this.formly = {
      form: new FormGroup({}),
      model: {
        search: null,
        section: null
      },
      fields: FORMLY_FIELDS
    };

    this.formly.fields[0].templateOptions.options = this.nyTimesAPIService.getSections();

    this.items = [
      {
        icon:'pi pi-fw pi-info-circle',
        items:[
            {
              label:'Ian Agpawa',
            },
            {
              separator:true
            },
            {
              label: 'Github',
              icon: 'pi pi-fw pi-github',
              url: 'https://github.com/ianagpawa'
            },
            {
              label:'Portfolio',
              icon:'pi pi-fw pi-palette',
              url: 'https://ianagpawa.github.io/ng-portfolio'
            },
            {
              label:'LinkedIn',
              icon:'pi pi-fw pi-id-card',
              url: 'https://www.linkedin.com/in/ianagpawa'
            }
        ]
      },
    ];
  }

  getSection(): ISelectOption { return this.formly.model.section; }

  onSubmit(): void {
    // this.emitModel()
  }

  onClear(): void {
    this.setDefaultModel();
    this.nyTimesAPIService.setSection(SECTIONS.HOME.id);
  }

  setDefaultModel(): void {
    this.formly.model = {
      search: null,
      section: null
    };
  }

  modelChange(event): void { this.nyTimesAPIService.setSection(this.getSection()); }

}
