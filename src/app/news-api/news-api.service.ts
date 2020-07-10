import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private api_key: string = "7bcd8e5bfb0242a98e83331d98bd9ee6";

  /** Constructor */
  constructor(private http:HttpClient) { }

  getRequest(path: string): Observable<Object> { return this.http.get(`https://newsapi.org/v2/${path}&apiKey=${this.api_key}`); }
  
  getRequestByType(path: string, type: string): Observable<Object> { return this.getRequest(path).pipe(map((requestResponse) => { return requestResponse[type]; })); }
  
  getSources():Observable<any> { return this.getRequestByType('sources?language=en', 'sources') }
  
  getArticlesBySource(source: String):Observable<any> { return this.getRequestByType(`top-headlines?sources=${source}`, 'articles') }

  getTopHeadlines() {}
}
