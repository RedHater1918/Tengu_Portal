import { Component, OnInit, Inject, Optional } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Story } from "../story.model";
import { StoryService } from "../story.service";
import { UserService } from "src/app/user/user.service";
import { Router, ActivatedRoute } from "@angular/router";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "story-add",
  templateUrl: "./story-add.component.html",
  styleUrls: ["./story-add.component.css"],
})
export class StoryAddComponent implements OnInit {
  newStoryForm: FormGroup;
  story: Story;
  fibArray:number[]=[1, 2, 3, 5, 8, 13, 21];

  constructor(
    private formbuilder: FormBuilder,
    private storyService: StoryService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    @Optional() @Inject(MAT_DIALOG_DATA) public dialog_data: any = {}
  ) {}

  ngOnInit() {
    this.newStoryForm = this.formbuilder.group({
      id: [""],
      title: ["", Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      text: ["", Validators.required],
      author: [""],
    });

    if (this.route.params["value"]["id"]) {
      this.storyService
        .getStory(this.route.params["value"]["id"])
        .subscribe((data: Story) => {
          this.newStoryForm.get("id").setValue(data.id);
          this.newStoryForm.get("title").setValue(data.title);
          this.newStoryForm.get("price").setValue(data.price);
          this.newStoryForm.get("text").setValue(data.text);
          this.newStoryForm.get("author").setValue(data.author);
        });
    } else if (this.dialog_data && this.dialog_data["id"]) {
      this.storyService
        .getStory(this.dialog_data["id"])
        .subscribe((data: Story) => {
          this.newStoryForm.get("id").setValue(data.id);
          this.newStoryForm.get("title").setValue(data.title);
          this.newStoryForm.get("price").setValue(data.price);
          this.newStoryForm.get("text").setValue(data.text);
          this.newStoryForm.get("author").setValue(data.author);
        });
    }
  }
  onScroll(event) {} /* for wheel support */

  saveStory(value) {
    let result = new Story();
    result.author = value.author ? value.author : this.userService.currentUser;
    result.price = value.price;
    result.id = value.id;
    result.title = value.title;
    result.text = value.text;
    result.rating = 0;
    
    this.storyService.saveStory(result).subscribe((s:Story) => {
      this.userService.rateStoryPrice(s.id,s.price).subscribe((p: any) => {
        this.router.navigateByUrl("/");
      });
    });
    
  }
}
