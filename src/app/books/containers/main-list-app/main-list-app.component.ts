import { Component, OnInit } from '@angular/core';
//import { books } from "../../../data-books";
import { BooksListService } from "../../services/list/books-list.service";
import { BookList } from '../../models';

@Component({
  //selector: 'app-books-main',
  selector: 'main-list-app',
  templateUrl: './main-list-app.component.html',
  styleUrls: ['./main-list-app.component.css']
})
export class MainListAppComponent implements OnInit {
  display = "none";
  idBookCat = "";
  booksList: BookList;
  constructor(private bookService: BooksListService) {
    this.bookService.searchBooks('Colombia');
  }
  ngOnInit() {
    this.bookService.booksList
      .subscribe(
        books => {
          if (books) {
            this.booksList = books;
          }
        }
      );
  }

  openModal(idBook:string) {
    this.display="block"; 
    this.idBookCat= idBook;
  }

  onCloseHandled() {
    this.display="none"; 
    this.idBookCat= "";
  }

  addBookToCategory(idCategory:string){
    console.log("idBook: " +  this.idBookCat + " - " + "idCategory: " + idCategory);
    this.display="none"; 
  }

 
}
