import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  api_key: string = "7bcd8e5bfb0242a98e83331d98bd9ee6";
  
  constructor(private http:HttpClient) { }

  getSources():Observable<any> { return this.getRequestByType('sources?language=en', 'sources') }
  
  getArticles(): Observable<Object> { return this.getRequestByType('top-headlines?sources=techcrunch', 'articles'); }
  
  getArticlesById(source: String):Observable<any> { return this.getRequest(`?sources=${source}`); }

  getRequest(path: string): Observable<Object> { return this.http.get(`https://newsapi.org/v2/${path}&apiKey=${this.api_key}`); }

  getRequestByType(path: string, type: string): Observable<Object> { return this.getRequest(path).pipe(map((requestResponse) => { return requestResponse[type]; })); }

}
