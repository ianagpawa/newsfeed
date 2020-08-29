import { TestBed } from '@angular/core/testing';

import { NytimesApiService } from './nytimes-api.service';

describe('NytimesApiService', () => {
  let service: NytimesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NytimesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
