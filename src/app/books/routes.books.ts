import { Routes } from "@angular/router";
import { BookDetailAppComponent } from "./containers/book-detail-app/book-detail-app.component";
import { MainListAppComponent } from "./containers/main-list-app/main-list-app.component";

export const routes: Routes = [
    {
        path: 'list',
        component: MainListAppComponent
    },
    {
        path: '', redirectTo: 'list', pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: BookDetailAppComponent
    },
    {
        path: '**', redirectTo: 'list', pathMatch: 'full'
    }
];