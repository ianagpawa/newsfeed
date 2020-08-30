import { Component, OnInit, AfterViewInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { NewsApiService } from './news-api/news-api.service';
import { News } from './news.interfaces';
import { Sources, TopHeadlines } from './news-api/news.api.interfaces';
import { NEWS_SOURCES } from './news.constants';
import { Subscription } from 'rxjs';
import { NYTimesApiService } from './nytimes-api/nytimes-api.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, AfterViewInit, OnDestroy {
  @Output() headerInput: EventEmitter<any> = new EventEmitter();
  private subscriptions: Subscription[];
  private requestParamsArticles: TopHeadlines.IRequest;
  private articles: any[];

  /** Constructor */
  constructor(
    private newsApi: NewsApiService,
    private nytimesApi: NYTimesApiService,
    ) { }

  /** Initialize component. */
  ngOnInit(): void { this.initState(); }

  /** Additional tasks after initialization. */
  ngAfterViewInit(): void {
    this.headerInput.emit({sources: this.getSections()});
    this.subscriptions.push(
      // this.newsApi.getSources().subscribe(sources => {
      //   this.setSources(this.getFilteredNewsSources(sources));
      //   this.headerInput.emit({sources: this.getSources()});
      // }),
      // this.newsApi.getTopHeadlineArticles(this.requestParamsArticles).subscribe(articles=> this.setArticles(articles)),
      // this.nytimesApi.getDefaultRequest().subscribe(articles => this.setArticles(articles))
      this.nytimesApi.articles.subscribe(
        articles =>  {
          console.log('articles', articles);
          articles.subscribe((data) => {
            this.setArticles(data)
          })
        })

    );
  }

  /** Handles destroy event. */
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
    this.initState();
  }

  /** Initializes component state prop. */
  initState(): void {
    this.articles = [];
    this.subscriptions = [];
  }


  getSections(): any[] { return this.nytimesApi.getSections(); }

  /**
   * Getter for articles prop in component state.
   * @returns {  } Array of articles.
  */
  getArticles(): any[] { return this.articles; }

  /**
   * Setter for articles prop in component state.
   * @param { } articles Array of articles
   */
  setArticles(articles: any[]): void { this.articles = articles; }

  getFormatedNewsSources(sourceNames: string[]): string { return sourceNames.join(','); }

  searchArticles(source: string): void { this.newsApi.getTopHeadlineArticles({'sources': source}).subscribe(articles => { this.setArticles(articles) }); }  

  headerOutput(event) { 
    if (event.model) {
      if (event.model.sources) { this.requestParamsArticles.sources = event.model.sources; }
      if (event.model.search) { this.requestParamsArticles.q = event.model.search; }
      // if (!event.model.sources && !event.model.search) { this.setDefaultRequestParams(); }
      // this.newsApi.getTopHeadlineArticles(this.requestParamsArticles).subscribe(articles=> this.setArticles(articles));
    }
  }

}
