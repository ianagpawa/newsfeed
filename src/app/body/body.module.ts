import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BodyComponent } from './body.component';

@NgModule({
  declarations: [ BodyComponent ],
  imports: [
    BrowserModule
  ],
  exports: [ BodyComponent ],
  providers: [  ],
  bootstrap: [ BodyComponent ]
})
export class BodyModule { }
