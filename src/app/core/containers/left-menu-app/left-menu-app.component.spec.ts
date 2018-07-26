import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMenuAppComponent } from './left-menu-app.component';

describe('LeftMenuAppComponent', () => {
  let component: LeftMenuAppComponent;
  let fixture: ComponentFixture<LeftMenuAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftMenuAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftMenuAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
