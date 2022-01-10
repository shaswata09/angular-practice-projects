import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-servers',  // selecting by Component [Standard Option]
  // selector: '[app-servers]',   // selecting by Attribute [Other Options]
  // selector: `.app-servers`,    // selecting by Class  [Other Options]
  // NOTE: Selecting by ID is not supported in Angular
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = 'Test';
  isServerCreated: boolean = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000 );
  }

  ngOnInit(): void {
  }

  onCreateServer(): void {
    this.isServerCreated = true;
    this.serverCreationStatus = 'New Server created! Name is: ' + this.serverName;
  }

  onUpdateServerName( event: Event ): void {
    console.log(event);
    this.serverName = ( event.target as HTMLInputElement).value;
  }
}
