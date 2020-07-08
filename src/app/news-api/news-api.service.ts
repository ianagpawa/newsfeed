import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  api_key: string = null;
  
  constructor(private http:HttpClient) { }

  getSources(): Promise<any> { return this.getRequest('sources?language=en'); }
  
  getArticles(): Promise<any> { return this.getRequest('top-headlines?sources=techcrunch'); }
  
  getArticlesByID(source: String): Promise<any> { return this.getRequest(`?sources=${source}`); }

  getRequest(path: string) {
    const fullPath: string = `https://newsapi.org/v2/${path}&apiKey=${this.api_key}`;
    return new Promise( (resolve,reject) => { resolve(this.http.get(fullPath)); });
  }
}
