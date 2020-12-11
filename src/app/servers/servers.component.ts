import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'servers-app',
  templateUrl: './servers.component.html',
  // styleUrls: ['./servers.component.css']
  styles: [`
  .online {
    color: pink;
  }
  `]
})
export class ServersComponent extends AppComponent  implements OnInit {

  serverId: number = 10;
  serverStatus: string = 'offline';
  allowServer: boolean= false;
  serverCreationStatus: string = 'No server created';
  serverName: string = 'TestServer';
  serverCreated = false;
  servers = ['TestServer1','TestServer2'];
  getServerStatus() {
    return this.serverStatus;
  }
  onServerCreationStatus() {
     debugger;
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created '+ this.serverName;
  }
  onUpdateServerName(event: Event) {
    this.serverCreationStatus = (<HTMLInputElement>event.target).value;
  }
  constructor() { 
    super();
    //debugger;
    setTimeout(() => {
      this.allowServer = true;
    }, 2000);
  }

  ngOnInit(): void {
    //debugger;
    this.serverStatus = Math.random() > 0.5 ? 'online': 'offline';
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'orange';
  }

}
