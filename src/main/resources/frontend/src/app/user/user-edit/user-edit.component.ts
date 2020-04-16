import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { User, Roles } from "src/app/user/user.model";
import { UserService } from "src/app/user/user.service";
import { Router, ActivatedRoute } from "@angular/router";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-user-edit",
  templateUrl: "./user-edit.component.html",
  styleUrls: ["./user-edit.component.css"],
})
export class UserEditComponent implements OnInit {
  newUserForm: FormGroup;
  user: User;
  roles = Roles;

  constructor(
    private formbuilder: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public dialog_data: any
  ) {}

  ngOnInit() {
    this.newUserForm = this.formbuilder.group({
      id: [""],
      nickName: ["", Validators.required],
      email: ["", Validators.required],
      role: ["", Validators.required],
      points: [0, [Validators.required, Validators.min(0)]],
    });

    if (this.dialog_data && this.dialog_data["id"]) {
      this.userService
        .getUser(this.dialog_data["id"])
        .subscribe((data: User) => {
          this.newUserForm.get("id").setValue(data.id);
          this.newUserForm.get("nickName").setValue(data.nickName);
          this.newUserForm.get("role").setValue(data.role);
          this.newUserForm.get("email").setValue(data.email);
          this.newUserForm.get("points").setValue(data.points);
        });
    }
  }
  onScroll(event) {} /* for wheel support */

  saveUser(value) {
    let result = new User();
    result.id = value.id;
    result.nickName = value.nickName;
    result.email = value.email;
    result.role = value.role.toUpperCase();
    result.points = value.points;
    this.userService.saveUser(result).subscribe((s) => {
      this.router.navigateByUrl("/");
    });
  }
}
