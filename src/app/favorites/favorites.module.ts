import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { routes } from "./routes.favorites";
import { FavoritesListAppComponent } from "./containers/favorites-list-app/favorites-list-app.component";
import { CardBookComponent } from './components/card-book/card-book.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FavoritesListAppComponent, CardBookComponent]
})
export class FavoritesModule { }
