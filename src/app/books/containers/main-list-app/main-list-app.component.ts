import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { books } from "../../../data-books";
import { BooksListService } from "../../services/list/books-list.service";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { BookList } from '../../models';
import { Observable } from 'rxjs';

@Component({
  //selector: 'app-books-main',
  selector: 'main-list-app',
  templateUrl: './main-list-app.component.html',
  styleUrls: ['./main-list-app.component.css']
})
export class MainListAppComponent implements OnInit {
  display = "none";
  value: string;
  book: any;
  booksList: BookList;
  categoriesList: Observable<any[]>;
  selectedValue: string;
  @Input() collection: any;
  @Output() pushCollection = new EventEmitter<any>();
  user: firebase.User;

  constructor(private bookService: BooksListService, private authFire: AngularFireAuth,
    private rdb: AngularFireDatabase) {
    this.bookService.searchBooks('Colombia');
    this.categoriesList = null;
    this.selectedValue = null;
    this.authFire.authState
    .subscribe(
      user => {
        this.user = user;
        this.categoriesList = this.rdb.list('/collections/' + this.user.uid + "/").valueChanges();
        let listCateg = this.rdb.list('/collections/' + this.user.uid + "/");
        debugger;
        console.log("collsRef: " + this.categoriesList);
        console.log("collsRef: " + listCateg);
      }
    );
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

  addFavorite(book: any) {
    this.bookService.addFavorites(book);
  }

  openModal(book: any) {
    this.display = "block";
    this.book = book;
  }

  onCloseHandled() {
    this.display = "none";
  }

  addBookToCategory(nameCategory: string) {
    console.log(this.value);
    this.bookService.addCollections(nameCategory, this.book);
    //this.pushCollection.emit(nameCategory+"/"+this.book);
    this.display = "none";
    /*
    console.log("idBook: " +  this.idBookCat + " - " + "idCategory: " + idCategory);
     
    */
  }


}
