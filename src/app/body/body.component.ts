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
  nyregion: any[];
  popular: any[];
  subscriptions: Subscription[];

  constructor(private nyTimesApiService: NYTimesApiService) { }

  ngOnInit(): void {
    this.stories = [];
    this.nyregion =[];
    this.popular = [];
    this.subscriptions = [];
  }

  ngAfterViewInit(): void {
    this.subscriptions.push(
      this.nyTimesApiService.stories.subscribe(
        articles =>  {
          articles.subscribe((data) => {
            console.log(data);
            this.stories = data;
          })
        }
      ),
      this.nyTimesApiService.nyregion.subscribe(
        articles =>  {
          articles.subscribe((data) => {
            this.nyregion = data;
          })
        }
      ),
      this.nyTimesApiService.popular.subscribe(
        articles =>  {
          articles.subscribe((data) => {
            this.popular = data;
          })
        }
      )
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(x => x.unsubscribe() );
    this.subscriptions = [];
  }

  getImageUrl(story: any): string {
    return story.media
      && story.media[0]
      && story.media[0]['media-metadata']
      && story.media[0]['media-metadata'][0]
      && story.media[0]['media-metadata'][0].url;
  }

}
