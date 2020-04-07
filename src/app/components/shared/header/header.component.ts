import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBar = new EventEmitter();
  title = 'Movie-Browser';
  constructor() { }

  ngOnInit() {
  }

  openSideBar() {
    this.toggleSideBar.emit('open');
  }
}
