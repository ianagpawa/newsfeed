import { Component, OnInit, AfterViewInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { NewsApiService } from './news-api/news-api.service';
import { News } from './news.interfaces';
import { Sources, TopHeadlines } from './news-api/news.api.interfaces';
import { NEWS_SOURCES } from './news.constants';
import { Subscription } from 'rxjs';
import { NytimesApiService } from './nytimes-api/nytimes-api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, AfterViewInit, OnDestroy {
  @Output() headerInput: EventEmitter<any> = new EventEmitter();
  private state: News.IState;
  private subscriptions: Subscription[];
  private requestParamsArticles: TopHeadlines.IRequest;
  
  /** Constructor */
  constructor(
    private newsApi: NewsApiService,
    private nytimesApi: NytimesApiService,
    ) { }

  /** Initialize component. */
  ngOnInit(): void { this.initState() }

  /** Additional tasks after initialization. */
  ngAfterViewInit(): void {
    this.nytimesApi.getRequest()
      .then(data => {
        console.log(data);
      });
    this.subscriptions.push(
      this.newsApi.getSources().subscribe(sources => {
        this.setSources(this.getFilteredNewsSources(sources));
        this.headerInput.emit({sources: this.getSources()});
      }),
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

    this.setDefaultRequestParams();
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

  headerOutput(event) { 
    if (event.model) {
      if (event.model.sources) { this.requestParamsArticles.sources = event.model.sources; }
      if (event.model.search) { this.requestParamsArticles.q = event.model.search; }
      if (!event.model.sources && !event.model.search) { this.setDefaultRequestParams(); }
      this.newsApi.getTopHeadlineArticles(this.requestParamsArticles).subscribe(articles=> this.setArticles(articles));
    }
  }

  setDefaultRequestParams() {
    this.requestParamsArticles = {
      sources: this.getFormatedNewsSources(NEWS_SOURCES),
      pageSize: 50,
      page: 0
    }
  }
}
