import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'featured-story',
  templateUrl: './featured-story.component.html',
  styleUrls: ['./featured-story.component.scss']
})
export class FeaturedStoryComponent implements OnInit {
  @Input() title: string;
  @Input() articleUrl: string;
  @Input() imageUrl: string;
  @Input() section: string;
  @Input() publishedDate: string;

  constructor() { }

  ngOnInit(): void { }

}
