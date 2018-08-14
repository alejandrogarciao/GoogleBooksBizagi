import { TestBed, inject } from '@angular/core/testing';

import { CollectionsService } from './collections.service';

describe('CollectionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollectionsService]
    });
  });

  it('should be created', inject([CollectionsService], (service: CollectionsService) => {
    expect(service).toBeTruthy();
  }));
});
