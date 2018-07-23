import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './routes';
import { AppComponent } from './app.component';
import { TopNavAppComponent } from './top-nav-app/top-nav-app.component';
import { LeftMenuAppComponent } from './left-menu-app/left-menu-app.component';
import { MainListAppComponent } from './main-list-app/main-list-app.component';
import { CollectionListAppComponent } from './collection-list-app/collection-list-app.component';
import { FavoritesListAppComponent } from './favorites-list-app/favorites-list-app.component';
import { ContentAppComponent } from './content-app/content-app.component';
import { BookDetailAppComponent } from './book-detail-app/book-detail-app.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavAppComponent,
    LeftMenuAppComponent,
    MainListAppComponent,
    CollectionListAppComponent,
    FavoritesListAppComponent,
    ContentAppComponent,
    BookDetailAppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
