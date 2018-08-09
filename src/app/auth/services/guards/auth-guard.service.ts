import { Injectable } from '@angular/core';
import { CanActivate } from "@angular/router";
import { Observable, of } from "rxjs";
import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate():Observable<boolean>{
    
    if(!this.authService.isLoggedIn() && !localStorage.getItem('bzgBooksApp2')){
      this.router.navigate(['/login']);
      return of(false);
    }
    return of(true);  
  }
}
