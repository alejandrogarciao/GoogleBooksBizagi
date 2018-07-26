import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailAppComponent } from './book-detail-app.component';

describe('BookDetailAppComponent', () => {
  let component: BookDetailAppComponent;
  let fixture: ComponentFixture<BookDetailAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDetailAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
