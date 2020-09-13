import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NYTimesApiService } from '../nytimes-api/nytimes-api.service';
import { BodyComponent } from './body.component';
import { StoryCardComponent } from './story-card/story-card.component';
import { FeaturedStoryComponent } from './featured-story/featured-story.component';
import { PopularStoryComponent } from './popular-story/popular-story.component';

@NgModule({
  declarations: [ 
    BodyComponent, 
    StoryCardComponent,
    FeaturedStoryComponent, 
    PopularStoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  exports: [ BodyComponent ],
  providers: [ NYTimesApiService ],
  bootstrap: [ BodyComponent ]
})
export class BodyModule { }
