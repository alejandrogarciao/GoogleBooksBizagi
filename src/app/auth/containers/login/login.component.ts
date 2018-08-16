import { Component, OnInit,NgZone } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { auth } from 'firebase';
import { IAuth } from '../../models';
import { AuthService } from "../../services/auth/auth.service";
import { Router } from "@angular/router";
import {MatSnackBar} from '@angular/material';
import { MessagesService } from "../../../alerts/services/messages.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error : any;
  constructor(private authService: AuthService, private router: Router, private zone: NgZone, private snackBar: MatSnackBar,private alertService: MessagesService) { }

  ngOnInit() {
    
  }
  login(event : IAuth){
    //
    this.authService.login(event)
    .then(
      auth => {
        localStorage.setItem('bzgBooksApp2', JSON.stringify(auth));
        this.router.navigate(['main']);
      },
      error => {
        /*this.snackBar.open(error.message, "fail", {
          duration: 2000,
        });*/
        this.error = error.message;
        this.alertService.message(error.message,"error");
      }
    );
  }


  signGoogle(event){
    if(event){
      this.authService.signInWithGoogle()
      .then(
        data => {          
          localStorage.setItem('bzgBooksApp2', JSON.stringify(data));
          this.zone.run(() => {            
            this.router.navigate(['main/books/list']);
          });          
        }
      ).catch(
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
