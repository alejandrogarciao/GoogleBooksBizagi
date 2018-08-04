import { Injectable } from '@angular/core';
import { CanActivate } from "@angular/router";
import { Observable, of } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) { }

  canActivate():Observable<boolean>{
    if(!localStorage.getItem('bzgBooksApp2')){
      this.router.navigate(['/login']);
      return of(false);
    }
    return of(true);  
  }
}
