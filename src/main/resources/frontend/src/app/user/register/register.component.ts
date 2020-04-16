import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { Roles } from "../user.model";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { SignUpInfo } from "../auth/signup-info";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
  roles = Roles;
  hide: false;
  signUpForm: FormGroup;

  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = "";

  constructor(
    public fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.signUpForm = this.fb.group({
      nickName: ["", []],
      email: ["", [Validators.email, Validators.required]],
      password: [
        "",
        [
          /*Validators.pattern('regex'),
           Validators.maxLength(25),
           Validators.minLength(6),*/
        ],
      ],
      role: ["", [Validators.required]],
    });
  }

  get nickName() {
    return this.signUpForm.get("nickName");
  }

  get email() {
    return this.signUpForm.get("email");
  }

  get password() {
    return this.signUpForm.get("password");
  }

  get role() {
    return this.signUpForm.get("role");
  }

  onSubmit() {
    console.log(this.signUpForm);

    this.signupInfo = new SignUpInfo(
      this.nickName.value,
      this.email.value,
      this.password.value,
      this.role.value
    );

    this.userService.signUp(this.signupInfo).subscribe(
      (data) => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
        this.router.navigateByUrl("/");
      },
      (error) => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
