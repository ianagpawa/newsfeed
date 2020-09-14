import { Component, OnInit } from '@angular/core';
import { NYTimesApiService } from '../nytimes-api/nytimes-api.service';
import { SECTIONS } from '../nytimes-api/nytimes.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sections: any[];
  selectedSection: string;

  constructor(private nyTimesApiService: NYTimesApiService) { }

  ngOnInit(): void {
    this.sections = Object.keys(SECTIONS).map(key => SECTIONS[key] );
    this.selectedSection = 'home';
  }

  onClick(sectionId: string): void { 
    this.selectedSection = sectionId;
    this.nyTimesApiService.getArticlesBySection(sectionId); 
  }

}
