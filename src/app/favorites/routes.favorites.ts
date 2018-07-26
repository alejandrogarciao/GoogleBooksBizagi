
import { Routes } from "@angular/router";
import { FavoritesListAppComponent } from "./containers/favorites-list-app/favorites-list-app.component";

export const routes: Routes = [
    {
        path: 'list',
        component: FavoritesListAppComponent
    },
    {
        path: '**', redirectTo: 'list', pathMatch: 'full'
    }
];