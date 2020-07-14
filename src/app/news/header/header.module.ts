
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarModule } from 'primeng/toolbar';
import { HeaderComponent } from './header.component';
import { FormlyComponentModule } from './formly/formly.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ToolbarModule,
    FormlyComponentModule
  ],
  providers: [ ],
  bootstrap: [ HeaderComponent ],
  exports: [ HeaderComponent ]
})
export class HeaderModule { }
