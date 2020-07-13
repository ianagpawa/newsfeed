
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NewsComponent } from './news.component';
import { NewsApiService } from './news-api/news-api.service';
import { ArticleCardModule } from './article-card/article-card.module';

@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    ArticleCardModule
  ],
  providers: [ NewsApiService ],
  bootstrap: [ NewsComponent ],
  exports: [ NewsComponent ]
})
export class NewsModule { }
