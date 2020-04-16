import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TokenStorageService } from "../auth/token-storage.service";
import { AuthLoginInfo } from "../auth/login-info";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.css"],
})
export class LogInComponent implements OnInit {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = "";
  roles: string[] = [];
  return: string = "";

  private loginInfo: AuthLoginInfo;

  hide: false;
  signInForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private tokenStorage: TokenStorageService,
    private route: ActivatedRoute
  ) {
    this.signInForm = this.fb.group({
      email: ["", [Validators.email, Validators.required]],
      password: [
        "",
        [
          /*Validators.pattern('regex'),
           Validators.maxLength(25),
           Validators.minLength(6),*/
        ],
      ],
    });
  }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }

    this.route.queryParams.subscribe(
      (params) => (this.return = params["return"] || "/")
    );
  }

  get email() {
    return this.signInForm.get("email");
  }

  get password() {
    return this.signInForm.get("password");
  }

  onSuccess() {
    this.userService.loadCurrentUserData(this.email.value, () =>
      this.router.navigateByUrl(this.return)
    );
  }

  onSubmit() {
    this.loginInfo = new AuthLoginInfo(this.email.value, this.password.value);

    this.userService.attemptAuth(this.loginInfo).subscribe(
      (data) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        this.onSuccess();
      },
      (error) => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }
}
