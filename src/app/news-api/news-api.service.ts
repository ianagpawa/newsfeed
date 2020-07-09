import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  api_key: string = "7bcd8e5bfb0242a98e83331d98bd9ee6";
  
  constructor(private http:HttpClient) { }

  getSources():Observable<any> { return this.getRequest('sources?language=en'); }
  
  getArticles():Observable<any> { return this.getRequest('top-headlines?sources=techcrunch'); }
  
  getArticlesById(source: String):Observable<any> { return this.getRequest(`?sources=${source}`); }

  getRequest(path: string):Observable<any> { return this.http.get(`https://newsapi.org/v2/${path}&apiKey=${this.api_key}`); }

}
