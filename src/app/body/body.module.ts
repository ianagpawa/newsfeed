import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BodyComponent } from './body.component';
import { StoryCardModule } from './story-card/story-card.module';

@NgModule({
  declarations: [ BodyComponent ],
  imports: [
    BrowserModule,
    StoryCardModule
  ],
  exports: [ BodyComponent ],
  providers: [  ],
  bootstrap: [ BodyComponent ]
})
export class BodyModule { }
