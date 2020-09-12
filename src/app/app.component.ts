import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { NYTimesApiService } from './nytimes-api/nytimes-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
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
}
