import { Routes } from "@angular/router";
import { LoginComponent } from "./containers/login/";
import {LoginRegisterComponent } from "./components/login-register"

export const routes: Routes = [   
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'login-register',
        component: LoginRegisterComponent
    }
 ];