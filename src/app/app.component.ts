import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { NewsApiService } from './news-api/news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  state: any;

  constructor(private newsapi:NewsApiService){ }

  ngOnInit() { this.initState() }

  ngAfterViewInit() {
    this.state.subscriptions.push(
      this.newsapi.getSources().subscribe(sources => this.state.sources = sources),
      this.newsapi.getArticles().subscribe(articles=> this.state.articles = articles)
    );
  }

  ngOnDestroy() {
    this.state.subscriptions.forEach(x => x.unsubscribe());
    this.initState();
  }

  initState() {
    this.state = {
      articles: null,
      sources:  null,
      subscriptions: [],
    }
  }
  searchArticles(source){
    this.newsapi.getArticlesById(source).subscribe(data => this.state.articles = data['articles']);
  }

  
}
