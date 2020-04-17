import { Component, OnInit } from "@angular/core";
//import { User, Story, Purchase, Rate } from "@app/paths/models";
//import { UserService, StoryService } from "@app/paths/services";

import { User } from "../user/user.model";
import { Story } from "../story/story.model";
import { Purchase } from "../operations/purchase.model";
import { Rate } from "../operations/rate.model";

import { UserService } from "../user/user.service";
import { StoryService } from "../story/story.service";

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { DeleteDialogComponent } from "../shared/delete/delete.dialog.component";
import { StoryAddComponent } from "../story/story-add/story-add.component";
import { UserEditComponent } from "../user/user-edit/user-edit.component";

@Component({
  selector: "admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"],
})
export class AdminComponent implements OnInit {
  userDataModel = User;
  storyDataModel = Story;
  loadUserData = () => this.userService.loadUsers();
  loadStoryData = () => this.storyService.loadStories();

  constructor(
    public dialog: MatDialog,
    public userService: UserService,
    public storyService: StoryService
  ) {}

  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {},
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      //this.router.navigate(["."], { relativeTo: this.route });
    });
  }

  createEditStoryDialog(row): void {
    let data = row ? { id: row.id } : {};

    const dialogRef = this.dialog.open(StoryAddComponent, {
      height: "500px",
      data,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      //this.router.navigate(["."], { relativeTo: this.route });
    });
  }

  createEditUserDialog(row): void {
    let data = row ? { id: row.id } : {};

    const dialogRef = this.dialog.open(UserEditComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      //this.router.navigate(["."], { relativeTo: this.route });
    });
  }

  ngOnInit() {
    console.log(this.userService.currentUser.role);
  }
}
