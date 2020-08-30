import { Component, OnInit, Output, EventEmitter, OnDestroy, AfterViewInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Header } from './header.interfaces';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Sources } from '../news-api/news.api.interfaces';
import { FORMLY_FIELDS } from './header.config';
import { SECTIONS } from '../nytimes-api/nytimes.constants';
import { NYTimesApiService } from '../nytimes-api/nytimes-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() input: EventEmitter<any>;
  @Output() output: EventEmitter<any> = new EventEmitter();
  formly: Header.IFormly;
  
  constructor(private nyTimesAPIService: NYTimesApiService) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize(): void {
    this.formly = {
      form: new FormGroup({}),
      model: { 
        search: null, 
        sources: null
      },
      fields: FORMLY_FIELDS
    };

    this.formly.fields[0].templateOptions.options = this.nyTimesAPIService.getSections();
  }

  ngOnDestroy(): void { }

  getFormlyForm() { return this.formly.form }

  setFormlyForm(form: any): void { this.formly.form = new FormGroup(form) }

  getFormlyFields() { return this.formly.fields }

  setFormlyFields(fields: FormlyFieldConfig[]): void { this.formly.fields = fields }

  getFormlyModel() { return this.formly.model }

  getSources() { return this.getFormlyModel().sources; }

  setFormlyModel(model: Header.IModel): void { this.formly.model = model }

  onSubmit(): void { 
    // this.emitModel() 
  }

  onClear(): void { 
    this.setDefaultModel();
    // this.emitModel(); 
  }

  setDefaultModel(): void {
    this.formly.model = {
      search: null,
      sources: null
    }
  }

  // transformSources(sources: any[]) { return sources.map(source => { return {value: source.id, label: source.label} }) }

  modelChange(event): void {
    console.log('event', this.getSources());
    this.nyTimesAPIService.setSection(this.getSources());
    // this.emitModel(); 
  }

  // emitModel():void  { this.output.emit( { model: this.getFormlyModel() }) }
}
