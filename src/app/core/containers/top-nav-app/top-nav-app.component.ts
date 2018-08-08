import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BooksListService } from '../../../books/services/list/books-list.service';

@Component({
  selector: 'top-nav-app',
  templateUrl: './top-nav-app.component.html',
  styleUrls: ['./top-nav-app.component.css']
})
export class TopNavAppComponent implements OnInit {

  @Output() actionAside = new EventEmitter<string>();
  state: string;

  constructor(private _bookService: BooksListService) { 
    this.state = 'open';
  }

  ngOnInit() {
  }

  closeAside() {
    this.state = (this.state === 'close') ? 'open' : 'close';
    this.actionAside.emit(this.state);
  }

  searchText(event : string){
    this._bookService.searchBooks(event, 0, 20);
  }


}
