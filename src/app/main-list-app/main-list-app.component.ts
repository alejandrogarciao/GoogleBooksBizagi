import { Component, OnInit } from '@angular/core';
import {books} from "../data-books";

@Component({
  selector: 'main-list-app',
  templateUrl: './main-list-app.component.html',
  styleUrls: ['./main-list-app.component.css']
})
export class MainListAppComponent implements OnInit {
  booksList:any[];
  constructor() {
    this.booksList=[];
   }

  ngOnInit() {
    this.booksList = books.items;
  }

}
