
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import * as firebase from "firebase";
import { CollectionsService } from "../../services/collections.service";
import { Observable } from 'rxjs';
import { BookList } from '../../../books/models';
import { map } from 'rxjs/operators';
import { BooksListService } from "../../../books/services/list/books-list.service";
import { MessagesService } from "../../../alerts/services/messages.service";

@Component({
  selector: 'app-collection-list-app',
  templateUrl: './collection-list-app.component.html',
  styleUrls: ['./collection-list-app.component.css']
})
export class CollectionListAppComponent implements OnInit {

  bookList: Observable<any[]>;
  categoriesList: any[];
  user: firebase.User;
  itemsRef: AngularFireList<any>;
  collectionCategory: string = "Software";
  db: AngularFireDatabase;
  authFire2: AngularFireAuth;
  collsRef: AngularFireList<any>;
  alerts: MessagesService;
  constructor(private authFire: AngularFireAuth,
    private rdb: AngularFireDatabase) {
      this.db = rdb;
      this.authFire2 = authFire;
      this.getInitialList();
     }

  ngOnInit() {
  }

  getInitialList(){
    this.authFire2.authState
    .subscribe(
      user => {  
        this.user = user;        
        this.itemsRef = this.db.list('/collections/' + user.uid + "/");
         this.itemsRef.snapshotChanges().pipe(
          map(changes => 
            changes.map(c => ({ key: c.payload.key}))
          )
        ).subscribe(list =>{
          this.collectionCategory = list[0].key;
          this.categoriesList = list;
          this.getListByCategory(this.collectionCategory); 
        });
      }
    );  
  }

  getListByCategory(nameCategory: string) {
    this.authFire2.authState.subscribe(
      user => {  
        this.bookList = this.db.list(`/collections/${user.uid}/${nameCategory}`).valueChanges();
      });
  }

  deleteBookOfCategory(nameCategory: string,book:any){
    this.authFire2.authState.subscribe(
      user => {  
        this.collsRef = this.db.list(`/collections/${user.uid}/${nameCategory}/`);
        const promise = this.collsRef.push(book);
        promise.then(_ => this.alerts.message("Delete from collection", "success"));
      });
  }

}
