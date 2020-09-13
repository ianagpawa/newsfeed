import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { NYTimesApiService } from '../nytimes-api/nytimes-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit, AfterViewInit, OnDestroy {
  stories: any[];
  featured: any[];
  subscriptions: Subscription[];

  constructor(private nyTimesApiService: NYTimesApiService) { }

  ngOnInit(): void {
    this.stories = [];
    this.featured =[];
    this.subscriptions = [];
  }

  ngAfterViewInit(): void {
    this.subscriptions.push(
      this.nyTimesApiService.stories.subscribe(
        articles =>  {
          articles.subscribe((data) => {
            this.stories = data;
          })
        }
      ),
      this.nyTimesApiService.featured.subscribe(
        articles =>  {
          articles.subscribe((data) => {
            console.log('data', data)
            this.featured = data;
          })
        }
      )
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(x => x.unsubscribe() );
    this.subscriptions = [];
  }

}
