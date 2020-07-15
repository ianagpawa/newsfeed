import { Component, OnInit, Output, EventEmitter, OnDestroy, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Header } from './header.interfaces';
import { FORMLY_FIELDS } from './header.config';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Output() output: EventEmitter<any> = new EventEmitter();
  private state: Header.IState;

  constructor() { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize(): void {
    this.state = {
      form: new FormGroup({}),
      model: { search: 'something', sources: [] },
      fields: FORMLY_FIELDS
    }
  }

  ngAfterViewInit(): void { }

  ngOnDestroy(): void { }

  getStateForm() { return this.state.form }

  setStateForm(form: any): void { this.state.form = new FormGroup(form) }

  getStateFields() { return this.state.fields }

  setStateFields(fields: FormlyFieldConfig[]): void { this.state.fields = fields }

  getStateModel() { return this.state.model }

  setStateModel(model: Header.IModel): void { this.state.model = model }

  onSubmit(): void { this.output.emit( { model: this.getStateModel() }) }

}
