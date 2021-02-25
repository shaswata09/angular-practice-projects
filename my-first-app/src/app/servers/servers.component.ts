import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',  // selecting by Component [Standard Option]
  // selector: '[app-servers]',   // selecting by Attribute [Other Options]
  // selector: `.app-servers`,    // selecting by Class  [Other Options]
  // NOTE: Selecting by ID is not supported in Angular
  template: `
    <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
