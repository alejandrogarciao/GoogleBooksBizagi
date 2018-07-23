import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainListAppComponent } from './main-list-app.component';

describe('MainListAppComponent', () => {
  let component: MainListAppComponent;
  let fixture: ComponentFixture<MainListAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainListAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainListAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
