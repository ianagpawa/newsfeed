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
  private topStoriesUrl: string = 'https://api.nytimes.com/svc/topstories/v2/';
  @Output() stories: BehaviorSubject<any> = new BehaviorSubject(this.getRequest(SECTIONS.HOME.id));
  @Output() featured: BehaviorSubject<any> = new BehaviorSubject(this.getRequest(SECTIONS.NYREGION.id));

  constructor(private http: HttpClient) { }

  getRequest(section: string): Observable<any> {
    return this.http.get(`${this.topStoriesUrl}${section}.json?api-key=${this.key}`)
      .pipe(
        map((requestResponse: any) => requestResponse.results.slice(0,10)));
    }

  getSections(): any[] { return Object.keys(SECTIONS).map(key => SECTIONS[key]); }

  getArticlesBySection(id): void { this.stories.next(this.getRequest(id)); }

}
