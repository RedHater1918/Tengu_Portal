import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "./user/user.service";

import { TokenStorageService } from "./user/auth/token-storage.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  
  logout() {
    this.token.signOut();
    window.location.reload();
  }

  constructor(
    private router: Router,
    public userService: UserService,
    private token: TokenStorageService
  ) {}

  navigate(path: string) {
    this.router.navigateByUrl(path);
  }

  ngOnInit() {

  }
}
