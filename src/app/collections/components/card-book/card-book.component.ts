import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {CollectionsService}  from '../../services/collections.service'
@Component({
  selector: 'app-card-book',
  templateUrl: './card-book.component.html',
  styleUrls: ['./card-book.component.css']
})
export class CardBookComponent implements OnInit {

  @Input() book : any;
  @Input() nameCategory : any;
  
  constructor(private collectionService: CollectionsService) { }

  ngOnInit() {
  }

  deleteBookOfCategory(book:any){
    console.log("entro 1");
    this.collectionService.deleteBookOfCategory(this.nameCategory,book);
  }

}
