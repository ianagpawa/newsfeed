import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularStoryComponent } from './popular-story.component';

describe('PopularStoryComponent', () => {
  let component: PopularStoryComponent;
  let fixture: ComponentFixture<PopularStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
