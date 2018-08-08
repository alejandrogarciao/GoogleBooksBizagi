import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-book',
  templateUrl: './card-book.component.html',
  styleUrls: ['./card-book.component.styl']
})
export class CardBookComponent implements OnInit {

  @Input() book : any;
  
  constructor() { }

  ngOnInit() {
  }

}
