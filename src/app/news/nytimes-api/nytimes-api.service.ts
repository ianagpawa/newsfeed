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
  @Output() articles: BehaviorSubject<any> = new BehaviorSubject(this.getRequest(SECTIONS.HOME.id));

  constructor(private http: HttpClient) { }

  getRequest(section: string): Observable<any> {
    return this.http.get(`${this.topStoriesUrl}${section}.json?api-key=${this.key}`)
      .pipe(
        map((requestResponse: any) => requestResponse.results));
    }

  getSections(): any[] { return Object.keys(SECTIONS).map(key => SECTIONS[key]); }

  setSection(id): void { this.articles.next(this.getRequest(id)); }

}
