import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import * as firebase from "firebase";
import { MessagesService } from "../../alerts/services/messages.service";


@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  collsRef: AngularFireList<any>;
  user: firebase.User;

  constructor(private alertService: MessagesService, private authFire: AngularFireAuth,
    private rdb: AngularFireDatabase) {
      authFire.authState
      .subscribe(
        user => {
          this.user = user;
          this.collsRef = rdb.list('collections/' + this.user.uid + '/2');
        }
      );
    
  }

  listCollections() : AngularFireList<any[]>{
    return this.collsRef;
  }

}
