import { Component, Input } from "@angular/core";
import { Story } from "../story.model";
import { UserService } from "../../user/user.service";
import { Router } from "@angular/router";
@Component({
  selector: "story-list-view",
  templateUrl: "./story-list-view.component.html",
  styleUrls: ["./story-list-view.component.css"],
})
export class StoryListViewComponent {
  @Input() story: Story;

  buy(id) {
    this.userService.buy(id).subscribe((s: any) => {
      this.story.purchased = true;
      this.userService.loadCurrentUserData(this.userService.currentUser.email);
    });
  }

  edit(id) {
    this.router.navigateByUrl(`editor/story/${this.story.id}`);
  }

  constructor(public userService: UserService, private router: Router) {}
}
