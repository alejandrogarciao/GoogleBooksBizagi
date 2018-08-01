import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsMessagesComponent } from './alerts-messages.component';

describe('AlertsMessagesComponent', () => {
  let component: AlertsMessagesComponent;
  let fixture: ComponentFixture<AlertsMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertsMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
