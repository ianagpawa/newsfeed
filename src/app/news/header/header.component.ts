import { Component, OnInit, Output, EventEmitter, OnDestroy, AfterViewInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Header } from './header.interfaces';
import { FORMLY_FIELDS } from './header.config';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Sources } from '../news-api/news.api.interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() input: EventEmitter<any>;
  @Output() output: EventEmitter<any> = new EventEmitter();
  private state: Header.IState;

  constructor() { }

  ngOnInit(): void { this.initialize(); }

  initialize(): void {
    this.state = {
      form: new FormGroup({}),
      model: { search: null, sources: [] },
      fields: FORMLY_FIELDS
    }
  }

  ngAfterViewInit(): void { 
    if (this.input) {
      this.input.subscribe( data => {
        console.log('after', this.transformSources(data.sources));
      })
    };
  }

  ngOnDestroy(): void { }

  getStateForm() { return this.state.form }

  setStateForm(form: any): void { this.state.form = new FormGroup(form) }

  getStateFields() { return this.state.fields }

  setStateFields(fields: FormlyFieldConfig[]): void { this.state.fields = fields }

  getStateModel() { return this.state.model }

  setStateModel(model: Header.IModel): void { this.state.model = model }

  onSubmit(): void { this.output.emit( { model: this.getStateModel() }) }

  transformSources(sources: Sources.ISource[]) { return sources.map(source => { return {value: source.id, label: source.name} }) }
}
