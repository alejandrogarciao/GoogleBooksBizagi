import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.styl']
})
export class BookInfoComponent implements OnInit {

  @Input() book:any;
  @Output() pushFavorite = new EventEmitter<any>();

  constructor() { }

  ngOnInit() 
  {
  }

  addFavorite(){
    this.pushFavorite.emit(this.book);
  }
}
