import { Routes } from "@angular/router";


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