import { Component, OnInit, Input  } from '@angular/core';
import { trigger, state, style, animate, transition } from "@angular/animations";
import { User } from "../../../auth/models/user";

@Component({
  selector: 'left-menu-app',
  templateUrl: './left-menu-app.component.html',
  styleUrls: ['./left-menu-app.component.css'],
  animations: [
    trigger('asideCollapse', [
      state('close', style({
        width: "50px"        
      })),
      state('open', style({
        width: "300px"
      })),
      transition('open => close', animate('100ms ease-out')),
      transition('close => open', animate('100ms ease-in'))
    ])
  ]
})
export class LeftMenuAppComponent implements OnInit {

  @Input() asideState:string;
  user: User;
  today: Date;
  constructor() {
    this.today = new Date();
   }

  ngOnInit() {
    this.user = {
      name: "usuario",
      lastname: "prueba",
      username: "pruebaUser",
      email: "usuario@prueba.com",
      urlImage: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
    }
  }

}
