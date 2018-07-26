import { Component, OnInit } from '@angular/core';
import {books} from "../../../data-books";

@Component({
  selector: 'content-app',
  templateUrl: './content-app.component.html',
  styleUrls: ['./content-app.component.css']
})
export class ContentAppComponent implements OnInit {

  booksList:any[];
  constructor() {
    this.booksList=[];
   }

  ngOnInit() {
    this.booksList = books.items;
  }

}
