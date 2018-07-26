import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  stateAside: string;
  constructor() { }

  ngOnInit() {
  }
  closeAside(state){
    this.stateAside = state;
  }
}
