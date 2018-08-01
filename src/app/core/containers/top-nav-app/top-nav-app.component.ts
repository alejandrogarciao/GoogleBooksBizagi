import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'top-nav-app',
  templateUrl: './top-nav-app.component.html',
  styleUrls: ['./top-nav-app.component.css']
})
export class TopNavAppComponent implements OnInit {

  @Output() actionAside = new EventEmitter<string>();
  state: string;

  constructor() { }

  ngOnInit() {
  }

  closeAside() {
    this.state = (this.state === 'close') ? 'open' : 'close';
    this.actionAside.emit(this.state);
  }

}
