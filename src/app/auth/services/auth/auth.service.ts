import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { IAuth } from '../../models';
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private authFire:AngularFireAuth) { }

  login(auth : any){
    localStorage.setItem('bzgBooksApp2', JSON.stringify(auth));
    this.router.navigate(['/main/books/list']);
  }

  logout(){
    localStorage.removeItem('bzgBooksApp2');
    this.authFire.auth.signOut().then(
      data => {
        this.router.navigate(['/login']);
      }
    );    
  }
}
