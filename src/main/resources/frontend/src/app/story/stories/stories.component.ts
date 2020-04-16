import {
  Input,
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
} from "@angular/core";
import { MatTableDataSource, MatPaginator } from "@angular/material";
import { Story } from "../story.model";
import { StoryService } from "../story.service";
import { UserService } from "../../user/user.service";

@Component({
  selector: "stories",
  templateUrl: "./stories.component.html",
  styleUrls: ["./stories.component.css"],
})
export class StoriesComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  public dataSource;

  @Input() stories: Story[];

  constructor(
    private storyService: StoryService,
    private userService: UserService
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    if (this.stories) {
      this.dataSource = new MatTableDataSource(this.stories);
    } else {
      this.storyService
        .getStories(this.userService.currentUser.id)
        .subscribe((value: Story[]) => {
          console.log(value);
          this.dataSource = new MatTableDataSource(value);
          this.dataSource.paginator = this.paginator;
        });
    }
  }
}
