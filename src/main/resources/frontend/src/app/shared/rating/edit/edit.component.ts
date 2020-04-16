import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from "@angular/core";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "mat-star-rating",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
})
export class EditComponent implements OnInit {
  @Input("rating") private rating: number = 3;
  @Input("starCount") private starCount: number = 5;
  @Input("color") private color: string = "accent";
  @Output() private ratingUpdated = new EventEmitter();

  private snackBarDuration: number = 2000;
  private ratingArr = [];

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }
  onClick(rating: number) {
    this.snackBar.open("You rated " + rating + " / " + this.starCount, "", {
      duration: this.snackBarDuration,
    });
    this.ratingUpdated.emit(rating);
    return false;
  }

  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return "star";
    } else {
      return "star_border";
    }
  }
}
export enum StarRatingColor {
  primary = "primary",
  accent = "accent",
  warn = "warn",
}
