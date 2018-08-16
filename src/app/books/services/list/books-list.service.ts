import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import * as firebase from "firebase";
import { MessagesService } from "../../../alerts/services/messages.service";
import { environment } from "../../../../environments/environment";
import { BookList } from "../../models/books";

@Injectable({
  providedIn: 'root'
})
export class BooksListService {

  url = environment.apiBooks;
  booksList: Subject<BookList> = new Subject();
  favsRef: AngularFireList<any>;
  collsRef: AngularFireList<any>;
  user: firebase.User;
  category: string;
  db: AngularFireDatabase;
  authFire2: AngularFireAuth;
  alerts: MessagesService;

  constructor(private http: HttpClient, private alertService: MessagesService, private authFire: AngularFireAuth,
    rdb: AngularFireDatabase) {
    this.alerts = alertService;
    this.authFire2 = authFire;
    this.booksList.next({ kind: "", totalItems: 0, items: [] });
    authFire.authState
      .subscribe(
        user => {
          this.user = user;
          if(this.user){
            this.favsRef = rdb.list('favorites/' + this.user.uid);
          }
        }
      );
      this.db = rdb;
  }

  searchBooks(text: string, startIndex?: number, maxResults?: number) {

    let url = this.url + `volumes?q=${text}`;
    if (startIndex) {
      url += `&startIndex=${startIndex}`;
    }
    if (maxResults) {
      url += `&maxResults=${maxResults}`;
    }

    this.http.get<BookList>(url)
      .pipe(
        catchError(this.handleError<BookList>('Get Books List', null))
      )
      .subscribe(
        (books) => {
          this.booksList.next(books);
        }
      );
  }

  addFavorites(book: any) {
    const promise = this.favsRef.push(book);
    promise.then(_ => this.alertService.message("Agregado a Favoritos", "success"));

  }  

  addCollections(category:string,book: any) {
    if(this.user){
      this.collsRef = this.db.list('collections/' + this.user.uid + "/" + category);
      const promise = this.collsRef.push(book);
      promise.then(_ => this.alerts.message("Adding to collection", "success"));
    }else{
      this.alerts.message("Adding to collection", "error");
    }
    

  }  

  getBook(id: string): Observable<any> {
    let url = this.url + `volumes/${id}`;
    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError<any>('Get Book', null))
      );
  }
 
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    let type = "error";
    this.alertService.message(message, type);
  }
}
