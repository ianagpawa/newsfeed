import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private api_key: string = '7bcd8e5bfb0242a98e83331d98bd9ee6';
  private baseUrl: string = 'https://newsapi.org/v2';

  /** Constructor */
  constructor(private http:HttpClient) { }

  getRequest(path: string): Observable<any> { return this.http.get(`${this.baseUrl}${path}&apiKey=${this.api_key}`); }
  
  getRequestByType(path: string, type: string): Observable<any> { return this.getRequest(path).pipe(map((requestResponse) => { return requestResponse[type]; })); }
  
  getSources():Observable<any> { return this.getRequestByType('/sources?language=en', 'sources') }
  
  // getArticlesBySource(source: String):Observable<any> { return this.getRequestByType(`/top-headlines?sources=${source}`, 'articles') }

  // params for source
  // sources, language, sources, category, country

  getTopHeadlineArticles(
    params?: { 
      pageSize?: number,
      page?: number,
      sources?: string,
      country?: string,
      category?: string,
      q?: string}
  ):Observable<any> {
    let endpoint: string = '/top-headlines?';
    if (params) { endpoint += Object.keys(params).map(key => `${key}=${params[key]}`).join('&') }
    return this.getRequestByType(endpoint, 'articles');
  }
}
