import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { auth } from 'firebase';
import { IAuth } from '../../models';
import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private authFire:AngularFireAuth) { }

  ngOnInit() {
    
  }
  login(event : IAuth){
    //
    this.authFire.auth.signInWithEmailAndPassword(event.email, event.password)
    .then(
      auth => {
        this.authService.login(this.authFire.auth.currentUser);
      },
      error => {
        alert(error.message);
      }
    );
  }

  signGoogle(event){
    if(event){
      this.authFire.auth.signInWithPopup(new auth.GoogleAuthProvider)
      .then(
        auth => {
          this.authService.login(this.authFire.auth.currentUser);          
        },
        error => {
          alert(error.message);
        }
      );
    }
  }

}
