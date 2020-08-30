import { Component, OnInit, AfterViewInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { NYTimesApiService } from './nytimes-api/nytimes-api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, AfterViewInit, OnDestroy {
  private subscriptions: Subscription[];
  private articles: any[];

  /** Constructor */
  constructor(private nytimesApi: NYTimesApiService ) { }

  /** Initialize component. */
  ngOnInit(): void { this.initState(); }

  /** Additional tasks after initialization. */
  ngAfterViewInit(): void {
    this.subscriptions.push(
      this.nytimesApi.articles.subscribe(
        articles =>  {
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

}
