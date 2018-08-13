import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { IAuth, Auth } from '../../models';
import { Router } from "@angular/router";
import * as firebase from "firebase/app";
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private router: Router, private authFire: AngularFireAuth,private http: HttpClient) {
    this.user = authFire.authState;

    this.user
      .subscribe(
        (user) => {
          if (user) {
            this.userDetails = user;            
          } else {
            this.userDetails = null;
          }
        }
      );
  }

  signInWithGoogle() {
    return this.authFire.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }

  login(auth: Auth) {    
    return this.authFire.auth.signInWithEmailAndPassword(auth.email, auth.password)
  }

  isLoggedIn() {
    if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  }


  logout() {
    localStorage.removeItem('bzgBooksApp2');
    this.authFire.auth.signOut()
      .then((res) => this.router.navigate(['/login']));
  }

  create(user: User) {
    return this.http.post('/api/users', user);
  }

}
