
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NewsComponent } from './news.component';
import { NewsApiService } from './news-api/news-api.service';
import { NytimesApiService } from './nytimes-api/nytimes-api.service';
import { ArticleCardModule } from './article-card/article-card.module';
import { HeaderModule } from './header/header.module';

@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    ArticleCardModule,
    HeaderModule
  ],
  providers: [ 
    NewsApiService,
    NytimesApiService
  ],
  bootstrap: [ NewsComponent ],
  exports: [ NewsComponent ]
})
export class NewsModule { }
