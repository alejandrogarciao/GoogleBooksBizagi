import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { routes } from "./routes.books";
import { MainListAppComponent } from "./containers/main-list-app/main-list-app.component";
import { BookDetailAppComponent } from "./containers/book-detail-app/book-detail-app.component";
import { BookInfoComponent } from './components/book-info/book-info.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainListAppComponent,BookDetailAppComponent, BookInfoComponent]
})
export class BooksModule { }
