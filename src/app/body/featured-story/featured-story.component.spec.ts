import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedStoryComponent } from './featured-story.component';

describe('FeaturedStoryComponent', () => {
  let component: FeaturedStoryComponent;
  let fixture: ComponentFixture<FeaturedStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
