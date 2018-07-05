import { TestBed, inject } from '@angular/core/testing';

import { JsonPlaceHolderService } from './index';

describe('JsonPlaceHolderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonPlaceHolderService]
    });
  });

  it('should be created', inject([JsonPlaceHolderService], (service: JsonPlaceHolderService) => {
    expect(service).toBeTruthy();
  }));
});
