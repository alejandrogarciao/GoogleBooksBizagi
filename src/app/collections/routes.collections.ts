import { Routes } from "@angular/router";
import { CollectionListAppComponent  } from "./containers/collection-list-app/collection-list-app.component";

export const routes: Routes = [
    {
        path: 'list',
        component: CollectionListAppComponent
    },
    {
        path: '**', redirectTo: 'list', pathMatch: 'full'
    }
];