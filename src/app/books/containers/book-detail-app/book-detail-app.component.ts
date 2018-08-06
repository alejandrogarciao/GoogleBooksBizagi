import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { books } from "../../../data-books";
import { BooksListService } from "../../services/list/books-list.service";

@Component({
  selector: 'app-detail-app',
  templateUrl: './book-detail-app.component.html',
  styleUrls: ['./book-detail-app.component.css']
})
export class BookDetailAppComponent implements OnInit {

  book: any;

  constructor(private router: ActivatedRoute, private bookService: BooksListService) {
    this.book = {};
  }

  ngOnInit() {
    let id: string;
    //id = this.router.snapshot.paramMap.get('id');
    this.router.params.subscribe((params: Params) => {
      id = params.id;
      this.bookService.getBook(id)
        .subscribe(
          books => {
            if (books) {
              this.book = books;
            }
          }
        );
    });
  }

  addFavorite(book) {
    this.bookService.addFavorites(book);
  }

}
