import { Component, OnInit } from '@angular/core';
import { Auth, IAuth } from "../../models";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  model: any = {};
  loading = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  register() {
    this.loading = true;
    this.authService.create(this.model);
        
    /*.subscribe(
            data => {
               // this.alertService.success('Registration successful', true);
                this.router.navigate(['/login']);
            },
            error => {
               // this.alertService.error(error);
                this.loading = false;
            });*/
}
}
