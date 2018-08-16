import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import * as firebase from "firebase";
import { MessagesService } from "../../alerts/services/messages.service";
import { map } from 'rxjs/operators';

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
          this.collsRef = rdb.list('collections/' + this.user.uid + '/Software');
        }
      );
    
  }

  listCollections() : AngularFireList<any[]>{
    return this.collsRef;
  }

  deleteBookOfCategory(nameCategory: string,book:any){

   this.authFire.authState.subscribe(
      user => {  
        this.collsRef = this.rdb.list(`/collections/${user.uid}/${nameCategory}`);
        const promise = this.collsRef.remove();
        //promise.then(_ => this.alertService.message("Delete from collection", "success"));
       });
  }


}
