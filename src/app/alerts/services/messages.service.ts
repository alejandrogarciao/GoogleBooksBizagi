import { Injectable } from '@angular/core';
import {Observable, of, Subject} from "rxjs";
import { Message} from "../models/message";


@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private subject = new Subject<any>();
  constructor() { }

  message(msg:string, type: string) {
    let message = {
      msg: msg,
      type: type
    }
    this.subject.next(message);    
  }

  getMessage():Observable<Message> {
    return this.subject.asObservable();
  }
}
