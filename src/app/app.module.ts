import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CoreModule } from "./core/core.module";
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './api-data/api-books-demo';
import { routes } from "./routes";
import { environment } from "../environments/environment";
import { AppComponent } from './app.component';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";

@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase, 'bizagibooks'),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    CoreModule,
    HttpModule,
    HttpClientModule
    /*
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )*/
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }