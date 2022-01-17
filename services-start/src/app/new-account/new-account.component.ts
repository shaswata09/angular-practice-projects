import { Component, EventEmitter, Output } from "@angular/core";
import { AccountService } from "../account.service";
import { LoggingService } from "../logging.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  providers: [LoggingService], // If we add AccountSevice in this providers array it will create a new instance of the service for itself which is not required.
})
export class NewAccountComponent {
  constructor(
    private loggingService: LoggingService,
    private accountService: AccountService
  ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
    // Below method is not proper way to use services in Angular
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
