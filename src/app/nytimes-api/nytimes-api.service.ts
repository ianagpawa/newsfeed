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
  @Output() stories: BehaviorSubject<any> = this.getTopStoriesRequest();
  @Output() featured: BehaviorSubject<any> = this.getMostPopularRequest();

  constructor(private http: HttpClient) { }

  getRequest(url: string): Observable<any> {
    return this.http.get(url)
      .pipe(
        map((requestResponse: any) => requestResponse.results.slice(0,10)));
    }


  getArticlesBySection(id): void { this.stories.next(this.getTopStoriesUrl(id)); }

  getUrl(apiName: string): string { return `https://api.nytimes.com/svc/${apiName}/v2/`; }

  getTopStoriesUrl(section: string): string { return `${this.getUrl('topstories')}${section}.json?api-key=${this.key}`; }

  getMostPopularUrl(type: string): string { return `${this.getUrl('mostpopular')}${type}/7.json?api-key=${this.key}`; }

  getTopStoriesRequest(section?: string) { return new BehaviorSubject(this.getRequest(this.getTopStoriesUrl(section || SECTIONS.HOME.id))); }

  getMostPopularRequest() { return new BehaviorSubject(this.getRequest(this.getMostPopularUrl('viewed'))); }

}
