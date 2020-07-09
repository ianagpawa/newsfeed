import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { NewsApiService } from './news-api/news-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  state: any;
  // articles: any[];
  // sources: any[];
  // subscriptions: Subscription[];
  

  constructor(private newsapi:NewsApiService){ }

  ngOnInit() { this.initState() }

  ngAfterViewInit() {
    this.state.subscriptions.push(
      this.newsapi.getSources().subscribe(data => this.state.sources = data['sources']),
      this.newsapi.getArticles().subscribe(data=> this.state.articles = data['articles'])
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
    console.log("selected source is: "+source);
    this.newsapi.getArticlesById(source).subscribe(data => this.state.articles = data['articles']);
  }

  
}
