import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MessagesService } from "../../../alerts/services/messages.service";

@Injectable({
  providedIn: 'root'
})
export class BooksListService {

  url = 'api/';
  constructor(private http: HttpClient, private alertService: MessagesService) { }

  getBookList(text?: string): Observable<any> {
    let url = this.url + 'books';
    if (text) {
      url = url + `/?id=${text}`;
    }
    return this.http.get(url)
      .pipe(        
        catchError(this.handleError('Get Books List', []))
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
