import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { NewsApiService } from './news-api/news-api.service';
import { News } from './news.interfaces';
import { Sources, TopHeadlines } from './news-api/news.api.interfaces';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, AfterViewInit, OnDestroy {
  private state: News.IState;

  /** Constructor */
  constructor(private newsApi: NewsApiService) { }

  /** Initialize component. */
  ngOnInit(): void { this.initState() }

  /** Additional tasks after initialization. */
  ngAfterViewInit(): void {
    this.state.subscriptions.push(
      this.newsApi.getSources().subscribe(sources => this.setSources(sources)),
      this.newsApi.getTopHeadlineArticles({sources: this.state.defaultSource }).subscribe(articles=> this.setArticles(articles))
    )
  }

  /** Handles destroy event. */
  ngOnDestroy(): void {
    this.state.subscriptions.forEach(x => x.unsubscribe());
    this.initState();
  }

  /** Initializes component state prop. */
  initState(): void {
    this.state = {
      articles: null,
      defaultSource: 'techcrunch',
      sources:  null,
      subscriptions: []
    };
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

  searchArticles(source: string): void { this.newsApi.getTopHeadlineArticles({'sources': source}).subscribe(articles => { this.setArticles(articles) }); }  

}
