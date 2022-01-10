import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'] 
})
export class ServerComponent {
  serverId: number = null;
  serverStatus: string = 'online';

  constructor() {
    this.serverId = Math.floor(Math.random()*1000);
    this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';
  }

  getServerStatus(): string{
      return this.serverStatus;
  }

  getColor(): string {
    return this.serverStatus == 'online' ? 'green' : 'red';
  }
}
