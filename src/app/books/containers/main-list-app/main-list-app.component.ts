import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { books } from "../../../data-books";
import { BooksListService } from "../../services/list/books-list.service";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { BookList } from '../../models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  imagePath:string = "assets/empty.jpg";
  categorySelected: string = "";
  booksList: BookList;
  categoriesList: Observable<any[]>;
  selectedValue: string;
  @Input() collection: any;
  @Output() pushCollection = new EventEmitter<any>();
  user: firebase.User;
  itemsRef: AngularFireList<any>;
  db: AngularFireDatabase;
  constructor(private bookService: BooksListService, private authFire: AngularFireAuth,
    private rdb: AngularFireDatabase) {
    this.bookService.searchBooks('Colombia');
    this.db = rdb;
    this.authFire.authState
    .subscribe(
      user => {  
        this.user = user;        
        this.itemsRef = rdb.list('/collections/' + user.uid + "/");
        // Use snapshotChanges().map() to store the key
        this.categoriesList = this.itemsRef.snapshotChanges().pipe(
          map(changes => 
            changes.map(c => ({ key: c.payload.key}))
          )
        );
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
    console.log("cate: " + nameCategory);
    this.bookService.addCollections(nameCategory, this.book);
    this.display = "none";
  }


}
