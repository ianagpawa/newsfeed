import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.scss']
})
export class StoryCardComponent implements OnInit {
  @Input() title: string;
  @Input() articleUrl: string;
  @Input() imageUrl: string;
  @Input() abstract: string;
  @Input() byline: string;
  @Input() section: string;

  constructor() { }

  ngOnInit(): void {

  }

}
