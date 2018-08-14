import { Component, OnInit, Input  } from '@angular/core';
import { trigger, state, style, animate, transition } from "@angular/animations";
//import { User } from "../../../auth/models/user";
import { AuthService } from "../../../auth/services/auth/auth.service";
import { User } from "firebase";
import { AngularFireAuth } from "angularfire2/auth";

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
        width: "230px"
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
 
  constructor(private authFire:  AngularFireAuth,private authService: AuthService) {
    this.today = new Date();
   }

  ngOnInit() {

    this.authFire.authState
    .subscribe(
      user => {        
        this.user = user;
      }
    )
  }
  logout(){
    this.authService.logout();
  }
}
