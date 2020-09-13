import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoryCardComponent } from './story-card.component';

@NgModule({
  declarations: [ StoryCardComponent ],
  imports: [
    BrowserModule
  ],
  exports: [ StoryCardComponent ],
  providers: [ ],
  bootstrap: [ StoryCardComponent ]
})
export class StoryCardModule { }
