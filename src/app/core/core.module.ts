import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { AppPipesModule } from "../app-pipes/app-pipes.module";
import { AlertsModule } from "../alerts/alerts.module";
import { routes } from "./routes.core";
import { CoreComponent } from './containers/core';
import { TopNavAppComponent } from "./containers/top-nav-app/top-nav-app.component";
import { LeftMenuAppComponent } from "./containers/left-menu-app/left-menu-app.component";
import { ContentAppComponent } from "./containers/content-app/content-app.component";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AppPipesModule,
    AlertsModule
  ],
  declarations: [CoreComponent, LeftMenuAppComponent, TopNavAppComponent,ContentAppComponent],
  exports: [CoreComponent]
})
export class CoreModule { }