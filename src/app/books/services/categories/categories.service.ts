import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import * as firebase from "firebase";
import { MessagesService } from "../../../alerts/services/messages.service";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories: Subject<any[]> = new Subject();
  url = environment.apiBooks;
  catRef: AngularFireList<any>;
  user: firebase.User;
  constructor(private http: HttpClient, private alertService: MessagesService, private authFire: AngularFireAuth,
    rdb: AngularFireDatabase) {
    this.categories.next();
    authFire.authState
      .subscribe(
        user => {
          this.user = user;
          this.catRef = rdb.list('collections/' + this.user.uid);
        }
      );
     }
}
