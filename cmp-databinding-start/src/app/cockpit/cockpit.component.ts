import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output("bpCreated") blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // newServerName = "";
  newServerContent = "";

  constructor() {}

  ngOnInit(): void {}

  onAddServer(serverInputElement: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverInputElement.value,
      serverContent: this.newServerContent,
    });
  }

  onAddBlueprint(serverInputElement: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverInputElement.value,
      serverContent: this.newServerContent,
    });
  }
}
