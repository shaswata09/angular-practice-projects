import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',  // selecting by Component [Standard Option]
  // selector: '[app-servers]',   // selecting by Attribute [Other Options]
  // selector: `.app-servers`,    // selecting by Class  [Other Options]
  // NOTE: Selecting by ID is not supported in Angular
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000 );
  }

  ngOnInit(): void {
  }

  onCreateServer(): void {
    this.serverCreationStatus = 'New Server created!';
  }
}
