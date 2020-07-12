import { Component, OnInit, Input } from '@angular/core';
import { TopHeadlines } from '../news-api/news.api.interfaces';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {
  @Input() input: TopHeadlines.IArticles;

  constructor() { }

  ngOnInit(): void { }
}
