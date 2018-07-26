import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CoreModule } from "./core/core.module";

import { routes } from "./routes";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    CoreModule
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }