import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { NYTimesApiService } from './nytimes-api/nytimes-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  private subscriptions: Subscription[];
  private articles: any[];

  /** Constructor */
  constructor( ) { }

  /** Initialize component. */
  ngOnInit(): void { }

}
