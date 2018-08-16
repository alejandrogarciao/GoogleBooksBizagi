import { Component, OnInit } from '@angular/core';
import { Auth, IAuth } from "../../models";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth/auth.service";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  model: any = {};
  loading = false;
  error : any;
  constructor(private authService: AuthService, private router: Router, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.error="";
  }
  register() {
    this.loading = true;
    this.authService.create(this.model)
    .then(
      auth => {
        
        this.router.navigate(['/login'])
      },
      error => {
        //alert(error.message);
        this.loading = false;
        this.error=error.message;
      }
    );
}
}
