
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CardModule } from 'primeng/card';

import { ArticleCardComponent } from './article-card.component';


@NgModule({
  declarations: [ ArticleCardComponent ],
  imports: [
    BrowserAnimationsModule,
    CardModule
  ],
  providers: [ ],
  bootstrap: [ ArticleCardComponent ],
  exports: [ ArticleCardComponent ]
})
export class ArticleCardModule { }
