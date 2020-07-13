import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { NewsApiService } from './news-api/news-api.service';
import { News } from './news.interfaces';
import { Sources, TopHeadlines } from './news-api/news.api.interfaces';
import { NEWS_SOURCES } from './news.constants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, AfterViewInit, OnDestroy {
  private state: News.IState;
  private subscriptions: Subscription[];
  private requestParamsArticles: TopHeadlines.IRequest;

  /** Constructor */
  constructor(private newsApi: NewsApiService) { }

  /** Initialize component. */
  ngOnInit(): void { this.initState() }

  /** Additional tasks after initialization. */
  ngAfterViewInit(): void {
    this.subscriptions.push(
      this.newsApi.getSources().subscribe(sources => this.setSources(this.getFilteredNewsSources(sources)) ),
      this.newsApi.getTopHeadlineArticles(this.requestParamsArticles).subscribe(articles=> this.setArticles(articles))
    );
  }

  /** Handles destroy event. */
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
    this.initState();
  }

  /** Initializes component state prop. */
  initState(): void {
    this.state = {
      articles: null,
      sources:  null
    };

    this.subscriptions = [];

    this.requestParamsArticles = {
      sources: this.getFormatedNewsSources(NEWS_SOURCES),
      pageSize: 50,
      page: 0
    }
  }

  /**
   * Getter for sources prop in component state.
   * @returns { Sources.ISource[] } Array of sources.
  */
  getSources(): Sources.ISource[] { return this.state.sources }

  /**
   *  Setter for sources prop in component state.
   * @param { Sources.ISource[] } sources Array for sources.
   */
  setSources(sources: Sources.ISource[]): void { this.state.sources = sources }

  /**
   * Getter for articles prop in component state.
   * @returns { TopHeadlines.IArticles[] } Array of articles.
  */
  getArticles(): TopHeadlines.IArticles[] { return this.state.articles }

  /**
   * Setter for articles prop in component state.
   * @param { TopHeadlines.IArticles[] } articles Array of articles
   */
  setArticles(articles: TopHeadlines.IArticles[]): void { this.state.articles = articles }

  getFormatedNewsSources(sourceNames: string[]): string { return sourceNames.join(',') }

  getFilteredNewsSources(sources: Sources.ISource[]): Sources.ISource[] { return sources.filter(source => NEWS_SOURCES.indexOf(source.id) !== -1) }

  searchArticles(source: string): void { this.newsApi.getTopHeadlineArticles({'sources': source}).subscribe(articles => { this.setArticles(articles) }); }  
}
