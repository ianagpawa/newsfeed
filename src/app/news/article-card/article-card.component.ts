import { Component, OnInit, Input } from '@angular/core';
import { TopHeadlines } from '../news-api/news.api.interfaces';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {
  @Input() input: any;

  constructor() { }

  ngOnInit(): void { }

  /**
   * Gets path for news source icon by source id.
   * @param { string } sourceId
   * @returns { string }
   */
  getImage(sourceId: string): string { return `../assets/images/news/${sourceId}.png`; }
}
