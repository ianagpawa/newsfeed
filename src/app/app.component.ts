import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { NewsApiService } from './news-api/news-api.service';
import { IApp } from './app.component.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  state: IApp.State;

  /** Constructor */
  constructor(private newsApi:NewsApiService) { }

  /** Initialize component. */
  ngOnInit(): void { this.initState() }

  /** Additional tasks after initialization. */
  ngAfterViewInit(): void {
    this.state.subscriptions.push(
      this.newsApi.getSources().subscribe(sources => this.state.sources = sources),
      this.newsApi.getArticlesBySource(this.state.defaultSource).subscribe(articles=> this.state.articles = articles)
    );
  }

  /** Handles destroy event. */
  ngOnDestroy(): void {
    this.state.subscriptions.forEach(x => x.unsubscribe());
    this.initState();
  }

  initState(): void {
    this.state = {
      articles: null,
      defaultSource: 'techcrunch',
      sources:  null,
      subscriptions: []
    };
  }

  getSources(): Array<Object> { return this.state.sources }

  getArticles(): Array<Object> { return this.state.articles }

  searchArticles(source: string): void { this.newsApi.getArticlesBySource(source).subscribe(articles => {this.state.articles = articles }); }  
}
