import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { books } from "../data-books";

@Component({
  selector: 'book-detail-app',
  templateUrl: './book-detail-app.component.html',
  styleUrls: ['./book-detail-app.component.css']
})
export class BookDetailAppComponent implements OnInit {

  book: any;
  constructor(private router: ActivatedRoute) {
    this.book = {};
  }

  ngOnInit() {
    let id: string;
    //id = this.router.snapshot.paramMap.get('id');
    this.router.params.subscribe((params: Params) => {
      id = params.id;
      this.book = books.items.find(item => {
        return item.id === id;
      });
    });
  }
}
