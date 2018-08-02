import { Component, OnInit } from '@angular/core';
import {books} from "../../../data-books";
import { BooksListService } from "../../services/list/books-list.service";

@Component({
  selector: 'main-list-app',
  templateUrl: './main-list-app.component.html',
  styleUrls: ['./main-list-app.component.css']
})
export class MainListAppComponent implements OnInit {
  booksList:any[];
  constructor(private bookService: BooksListService) {
    this.booksList=[];
   }

  ngOnInit() {
    this.bookService.getBookList()
    .subscribe(
      books => {
        if (books){
          this.booksList = books;
        }
        
      }
    );
  }

}
