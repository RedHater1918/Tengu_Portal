import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.css"]
})
export class ResetPasswordComponent implements OnInit {
  email: string;

  constructor(private auth: UserService, private router: Router) {}

  ngOnInit() {}

  resetPassword(email) {
    //this.auth.resetPassword(this.email)
    //.then(()=> this.router.navigate(['/login']))
  }
}
