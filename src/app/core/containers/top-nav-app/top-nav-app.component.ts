import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BooksListService } from '../../../books/services/list/books-list.service';
import { AuthService } from "../../../auth/services/auth/auth.service";
import { User } from "firebase/app";
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: 'top-nav-app',
  templateUrl: './top-nav-app.component.html',
  styleUrls: ['./top-nav-app.component.css']
})
export class TopNavAppComponent implements OnInit {
  user: User;
  today: Date;
 
  constructor(private authFire:  AngularFireAuth,private authService: AuthService,private _bookService: BooksListService) {
    this.today = new Date();
    this.state = 'open';
   }

  logout(){
    this.authService.logout();
  }

  @Output() actionAside = new EventEmitter<string>();
  state: string;


  ngOnInit() {
    this.authFire.authState
    .subscribe(
      user => {        
        this.user = user;
      }
    )
  }

  closeAside() {
    this.state = (this.state === 'close') ? 'open' : 'close';
    this.actionAside.emit(this.state);
  }

  searchText(event : string){
    this._bookService.searchBooks(event, 0, 20);
  }


}
