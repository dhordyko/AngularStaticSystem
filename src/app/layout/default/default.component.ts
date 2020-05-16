import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  sidebarOpen = false;
  constructor() { }

  ngOnInit() {
  }
  sideBarToggler($event: any) {
    console.log('HELLLOO')
    this.sidebarOpen = !this.sidebarOpen
  }

}
