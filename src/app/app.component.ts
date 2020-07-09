import { Component } from '@angular/core';
import { NewsApiService } from './news-api/news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles:Array<any>;
  sources:Array<any>;

  constructor(private newsapi:NewsApiService){ }

  ngOnInit() {
      this.newsapi.getSources().subscribe(data => this.sources = data['sources']);
      this.newsapi.getArticles().subscribe(data=> this.articles = data['articles']);  
    }

  searchArticles(source){
    console.log("selected source is: "+source);
    this.newsapi.getArticlesById(source).subscribe(data => this.articles = data['articles']);
  }
}
