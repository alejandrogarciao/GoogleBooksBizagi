import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { routes } from "./routes.books";
import { MainListAppComponent } from "./containers/main-list-app/main-list-app.component";
import { BookDetailAppComponent } from "./containers/book-detail-app/book-detail-app.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainListAppComponent,BookDetailAppComponent]
})
export class BooksModule { }
