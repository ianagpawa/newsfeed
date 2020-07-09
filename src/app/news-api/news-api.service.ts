import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  api_key: string = "7bcd8e5bfb0242a98e83331d98bd9ee6";
  
  constructor(private http:HttpClient) { }

  getSources() { return this.getRequest('sources?language=en'); }
  
  getArticles() { return this.getRequest('top-headlines?sources=techcrunch'); }
  
  getArticlesById(source: String) { return this.getRequest(`?sources=${source}`); }

  getRequest(path: string) {
    const fullPath: string = `https://newsapi.org/v2/${path}&apiKey=${this.api_key}`;
    // return new Promise( (resolve,reject) => { resolve(this.http.get(fullPath)); });
    return this.http.get(fullPath);
  }

  
  
}
