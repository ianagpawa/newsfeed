import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'popular-story',
  templateUrl: './popular-story.component.html',
  styleUrls: ['./popular-story.component.scss']
})
export class PopularStoryComponent implements OnInit {
  @Input() title: string;
  @Input() articleUrl: string;
  @Input() publishedDate: string;
  @Input() num: string;

  constructor() { }

  ngOnInit(): void {
  }

}
