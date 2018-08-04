import { Routes } from "@angular/router";
import { AuthGuardService } from "./auth/services/guards/auth-guard.service";

export const routes: Routes = [    
    {
        path: '',
        loadChildren: './core/core.module#CoreModule'
    },
    {
        path: 'login',
        loadChildren: './auth/auth.module#AuthModule'        
    },    
    {
        path: '**',
        redirectTo: ''
    }
    
];