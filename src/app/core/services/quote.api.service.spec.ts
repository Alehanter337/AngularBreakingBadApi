import { TestBed } from '@angular/core/testing';

import { Quote.ApiService } from './quote.api.service';

describe('Quote.ApiService', () => {
  let service: Quote.ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Quote.ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
