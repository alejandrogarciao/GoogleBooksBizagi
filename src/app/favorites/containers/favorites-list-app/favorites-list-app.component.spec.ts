import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesListAppComponent } from './favorites-list-app.component';

describe('FavoritesListAppComponent', () => {
  let component: FavoritesListAppComponent;
  let fixture: ComponentFixture<FavoritesListAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesListAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesListAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
