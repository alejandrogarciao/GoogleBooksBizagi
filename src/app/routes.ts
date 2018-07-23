import { Routes } from "@angular/router";
import { MainListAppComponent } from "./main-list-app/main-list-app.component";
import { CollectionListAppComponent } from "./collection-list-app/collection-list-app.component";
import { FavoritesListAppComponent } from "./favorites-list-app/favorites-list-app.component";
import {BookDetailAppComponent} from "./book-detail-app/book-detail-app.component"

export const routes: Routes = [
    {
        path: "",
        component: MainListAppComponent
    },
    {
        path: "collections",
        component: CollectionListAppComponent
    },
    {
        path: "favorites",
        component: FavoritesListAppComponent
    },
    {
        path: "detail/:id",
        component: BookDetailAppComponent
    },
    {
        path: "**",
        redirectTo: "/"
    }

];