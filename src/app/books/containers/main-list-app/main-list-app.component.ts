import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  value:string;
  book:any;
  booksList: BookList;
  @Input() collection:any;
  @Output() pushCollection = new EventEmitter<any>();

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

  addFavorite(book: any){
    this.bookService.addFavorites(book);
  }

  openModal(book: any) {
    this.display="block"; 
    this.book = book;
  }

  onCloseHandled() {
    this.display="none"; 
  }

  addBookToCategory(nameCategory:string){
    console.log(this.value);
    this.bookService.addCollections(nameCategory,this.book);
    //this.pushCollection.emit(nameCategory+"/"+this.book);
    this.display="none";
    /*
    console.log("idBook: " +  this.idBookCat + " - " + "idCategory: " + idCategory);
     
    */
  }

 
}
