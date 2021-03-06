import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  getUsers() {
    return this._http.get("/show");
  }

  createUser(newuser) {
    return this._http.post("/add", newuser);
  }

  oneUser(id) {
    return this._http.get(`/show/${id}`);
  }
}
