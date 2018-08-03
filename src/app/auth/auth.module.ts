import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { routes } from "./routes.auth";
import { LoginComponent } from './containers/login/';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  declarations: [LoginComponent, LoginFormComponent]
})
export class AuthModule { }
