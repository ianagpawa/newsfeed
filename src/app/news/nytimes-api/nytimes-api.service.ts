import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class NytimesApiService {
  key: string = 'GhN0umQfQsxxUdqq9BcZzKCKMG26hFJ8';
  url: string = 'https://api.nytimes.com/svc/topstories/v2/home.json';

  constructor(private http: HttpClient) { }

  getRequest():  Observable<any> { return this.http.get(`${this.url}?api-key=${this.key}`).pipe(map((requestResponse: any) => { return requestResponse.results; })); }

  // {
    // return new Promise((resolve, reject) => {
    //   return this.http.get(`${this.url}?api-key=${this.key}`)
    //     .toPromise()
    //     .then(data => {
    //       // return data;
    //       return resolve(data);
    //     })
    //     .catch(error => {
    //       console.log('error');
    //       reject();
    //     });
    // });

  // }
}
