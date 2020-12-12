import { TestBed } from '@angular/core/testing';

import { Character.ApiService } from './character.api.service';

describe('Character.ApiService', () => {
  let service: Character.ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Character.ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
