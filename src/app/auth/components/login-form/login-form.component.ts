import { Component, OnInit } from '@angular/core';
import { Auth, IAuth } from "../../models";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  
  login : IAuth;

  constructor() { }

  ngOnInit() {
  }

  submit() {
    console.log(this.login);
  }

}
