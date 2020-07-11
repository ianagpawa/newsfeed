import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { TopHeadlines, Sources } from './news.api.interfaces';

@Injectable({
  providedIn: 'any'
})
/** News API Service. */
export class NewsApiService {
  private api_key: string = '7bcd8e5bfb0242a98e83331d98bd9ee6';
  private baseUrl: string = 'https://newsapi.org/v2';

  /** Constructor */
  constructor(private http:HttpClient) { }

  /**
   * GET method for query to newsapi url.
   * @param { string } path URL path.
   * @returns { Observable<any> } Async response from news api.
   */
  getRequest(path: string): Observable<any> { return this.http.get(`${this.baseUrl}${path}&apiKey=${this.api_key}`); }
  
  /**
   * GET method by request type
   * @param { string } path URL path.
   * @param { string } type Type of request: articles or sources. 
   * @returns { Observable<Sources.ISource[] | TopHeadlines.IArticles[]> } Async response. Can be array of ISource or IArticles.
   */
  getRequestByType(path: string, type: string): Observable<Sources.ISource[] | TopHeadlines.IArticles[]> { return this.getRequest(path).pipe(map((requestResponse) => { return requestResponse[type]; })); }
  
  /**
   * GET method for retrieving top headline articles.
   * @param { TopHeadlines.IRequest } params Optional parameters for GET request for top headlines endpoint.
   * @returns { Observable<TopHeadlines.IArticles[] } Async response of an array of IArticles.
   */
  getTopHeadlineArticles(
    params?: { 
      pageSize?: number,
      page?: number,
      sources?: string,
      country?: string,
      category?: string,
      q?: string 
    }
  ): Observable<TopHeadlines.IArticles[]> {
    let endpoint: string = '/top-headlines?';
    if (params) { endpoint += Object.keys(params).map(key => `${key}=${params[key]}`).join('&') }
    return this.getRequestByType(endpoint, 'articles') as Observable<TopHeadlines.IArticles[]>;
  }

  /**
   * 
   * @param { Source.IRequest } params Optional parameters for GET request for sources endpoint.
   * @returns { Observable<Sources.ISource[] } Async response of an array of ISources.
   */
  getSources(
    params?: {
      category?: string,
      language?: string,
      country?: string
    }
  ): Observable<Sources.ISource[]> {
    let endpoint: string = '/sources?';
    if (params) { endpoint += Object.keys(params).map(key => `${key}=${params[key]}`).join('&') }
    return this.getRequestByType(endpoint, 'sources') as Observable<Sources.ISource[]>;
  }
}
