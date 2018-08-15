import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { routes } from "./routes.collections";
import { CollectionListAppComponent } from './containers/collection-list-app/collection-list-app.component'
import { AlertsModule } from "../alerts/alerts.module";
import { CardBookComponent } from './components/card-book/card-book.component';

@NgModule({
  imports: [
    CommonModule,
    AlertsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CollectionListAppComponent,CardBookComponent]
})
export class CollectionsModule { }
