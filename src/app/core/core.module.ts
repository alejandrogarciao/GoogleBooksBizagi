import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { routes } from "./routes.core";
import { CoreComponent } from './containers/core';
import { TopNavAppComponent } from "./containers/top-nav-app/top-nav-app.component";
import { LeftMenuAppComponent } from "./containers/left-menu-app/left-menu-app.component";
import { MainListAppComponent } from "./containers/main-list-app/main-list-app.component";
import { ContentAppComponent } from "./containers/content-app/content-app.component";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CoreComponent, LeftMenuAppComponent, TopNavAppComponent,MainListAppComponent,ContentAppComponent],
  exports: [CoreComponent]
})
export class CoreModule { }