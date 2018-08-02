import { TestBed, inject } from '@angular/core/testing';

import { BooksListService } from './books-list.service';

describe('BooksListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksListService]
    });
  });

  it('should be created', inject([BooksListService], (service: BooksListService) => {
    expect(service).toBeTruthy();
  }));
});
