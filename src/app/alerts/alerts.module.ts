import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsMessagesComponent } from './components/alerts-messages/alerts-messages.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlertsMessagesComponent],
  exports: [AlertsMessagesComponent]
})
export class AlertsModule { }
