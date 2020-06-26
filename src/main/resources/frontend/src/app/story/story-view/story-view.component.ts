import {
  Component,
  Input,
  ElementRef,
  AfterViewInit,
  ViewChild,
} from "@angular/core";
import { Story } from "../story.model";
import { StoryService } from "../story.service";
import { UserService } from "../../user/user.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-story-view",
  templateUrl: "./story-view.component.html",
  styleUrls: ["./story-view.component.css"],
})
export class StoryViewComponent implements AfterViewInit {
  story: Story;
  @ViewChild("storyViewTextElement", { static: false })
  storyViewTextElement: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storyService: StoryService,
    private userService: UserService
  ) {
    this.storyService
      .getStory(this.route.params["value"]["id"])
      .subscribe((value: any) => {
        this.story = value;
        this.storyViewTextElement.nativeElement.innerHTML = this.story.text;
      });
  }

  ngAfterViewInit() {}
  valueRate:number = 0;
  fibArray:number[]=[1, 2, 3, 5, 8, 13, 21, 34, 55];
  rating: number = 0;
  starCount: number = 5;

  onRatingChanged(rating) {
    this.rating = rating;
    this.userService.rate(this.story.id, rating).subscribe((s: any) => {
      console.log(s);
    });
  }
  onPriceRateChanged() {
    this.userService.rateStoryPrice(this.story.id, this.valueRate).subscribe((s: any) => {
      console.log(s);
    });
  }
}
