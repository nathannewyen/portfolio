import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  users = [];
  newUser: any;
  error = "";
  sent = false;

  constructor(private _httpService: HttpService, private _router: Router) {}

  ngOnInit() {
    this.getAllUsers();
    this.newUser = { name: "", email: "", message: "" };
  }

  getAllUsers() {
    let observable = this._httpService.getUsers();
    observable.subscribe((data) => {
      this.users = data["data"];
    });
  }

  sendMessage() {
    let observable = this._httpService.createUser(this.newUser);
    observable.subscribe((data: any) => {
      if (data.error) {
        this.error = data.error.errors;
        this._router.navigate(["/contact"]);
      } else {
        this.getAllUsers();
        this.sent = true;
        this.error = "";
        this._router.navigate(["/contact"]);
      }
    });
  }
}
