import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { NewsApiService } from './news-api/news-api.service';
import { IApp } from './app.component.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  private state: IApp.State;

  /** Constructor */
  constructor(private newsApi:NewsApiService) { }

  /** Initialize component. */
  ngOnInit(): void { this.initState() }

  /** Additional tasks after initialization. */
  ngAfterViewInit(): void {
    this.state.subscriptions.push(
      this.newsApi.getSources().subscribe(sources => this.state.sources = sources),
      this.newsApi.getTopHeadlineArticles({sources: 'techcrunch'}).subscribe(articles=> this.state.articles = articles)
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
      sources:  null,
      subscriptions: []
    };
  }

  getSources(): any[] { return this.state.sources }

  getArticles(): any[] { return this.state.articles }

  searchArticles(source: string): void { this.newsApi.getTopHeadlineArticles({'sources': source}).subscribe(articles => {this.state.articles = articles }); }  
}
