
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import * as firebase from "firebase";
import { CollectionsService } from "../../services/collections.service";
import { Observable } from 'rxjs';
import { BookList } from '../../../books/models';

@Component({
  selector: 'app-collection-list-app',
  templateUrl: './collection-list-app.component.html',
  styleUrls: ['./collection-list-app.component.css']
})
export class CollectionListAppComponent implements OnInit {

  bookList: Observable<any[]>;

  constructor(private colService: CollectionsService, private authFire: AngularFireAuth,
    private rdb: AngularFireDatabase) { }

  ngOnInit() {

    this.authFire.authState
      .subscribe(
        user => {          
          this.bookList = this.rdb.list('collections/' + user.uid + '/2').valueChanges();
        }
      );
  }

}
