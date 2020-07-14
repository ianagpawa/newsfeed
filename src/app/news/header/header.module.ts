
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarModule } from 'primeng/toolbar';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ToolbarModule
  ],
  providers: [ ],
  bootstrap: [ HeaderComponent ],
  exports: [ HeaderComponent ]
})
export class HeaderModule { }
