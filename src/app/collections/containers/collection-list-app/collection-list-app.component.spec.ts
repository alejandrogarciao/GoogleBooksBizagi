import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionListAppComponent } from './collection-list-app.component';

describe('CollectionListAppComponent', () => {
  let component: CollectionListAppComponent;
  let fixture: ComponentFixture<CollectionListAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionListAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionListAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
