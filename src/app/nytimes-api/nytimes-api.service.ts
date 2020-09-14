import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { SECTIONS } from './nytimes.constants';

@Injectable({
  providedIn: 'root'
})
export class NYTimesApiService {
  private key: string = 'GhN0umQfQsxxUdqq9BcZzKCKMG26hFJ8';
  private urlBase: string = 'https://api.nytimes.com/svc/';
  @Output() stories: BehaviorSubject<any> = new BehaviorSubject(this.getTopStoriesRequest());
  @Output() nyregion: BehaviorSubject<any> = new BehaviorSubject( this.getTopStoriesRequest('nyregion'));
  @Output() popular: BehaviorSubject<any> = new BehaviorSubject(this.getMostPopularRequest());

  constructor(private http: HttpClient) { }

  getRequest(url: string): Observable<any> {
    return this.http.get(url)
      .pipe(
        map((requestResponse: any) => requestResponse.results.slice(0,10)));
    }

  getArticlesBySection(id: string): void { this.stories.next(this.getTopStoriesRequest(id)); }

  getTopStoriesUrl(section: string): string { return `${this.getUrl('topstories', section)}.json?api-key=${this.key}`; }

  getMostPopularUrl(type: string): string { return `${this.getUrl('mostpopular', type)}/7.json?api-key=${this.key}`; }

  getUrl(endpoint: string, section: string): string { return `${this.urlBase}/${endpoint}/v2/${section}`; }

  getTopStoriesRequest(section?: string) { return this.getRequest(this.getTopStoriesUrl(section || SECTIONS.HOME.id)); }

  getMostPopularRequest() { return this.getRequest(this.getMostPopularUrl('viewed')); }

}
