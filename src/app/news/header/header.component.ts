import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private state: any;
  constructor() { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize(): void {
    this.state = {
      search: null
    }
  }

}
