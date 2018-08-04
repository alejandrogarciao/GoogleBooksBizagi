import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { FormsModule } from "@angular/forms";
import { routes } from "./routes.auth";
import { LoginComponent } from './containers/login/';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { environment } from "../../environments/environment";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  declarations: [LoginComponent, LoginFormComponent]
})
export class AuthModule { }
