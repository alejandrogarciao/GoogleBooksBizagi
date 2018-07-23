import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavAppComponent } from './top-nav-app.component';

describe('TopNavAppComponent', () => {
  let component: TopNavAppComponent;
  let fixture: ComponentFixture<TopNavAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNavAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
