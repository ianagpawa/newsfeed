import { TestBed } from '@angular/core/testing';

import { NYTimesApiService } from './nytimes-api.service';

describe('NytimesApiService', () => {
  let service: NYTimesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NYTimesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
