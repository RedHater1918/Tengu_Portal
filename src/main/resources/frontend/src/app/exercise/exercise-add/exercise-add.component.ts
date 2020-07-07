import { Component, OnInit, Inject, Optional } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from "src/app/user/user.service";
import { Router, ActivatedRoute } from "@angular/router";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ExerciseService } from '../exercise.service';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-exercise-add',
  templateUrl: './exercise-add.component.html',
  styleUrls: ['./exercise-add.component.css']
})
export class ExerciseAddComponent implements OnInit {
  newExerciseForm: FormGroup;
  exercise: Exercise;
  fibArray:number[]=[1, 2, 3, 5, 8, 13, 21];

  constructor(
    private formbuilder: FormBuilder,
    private exerciseService:ExerciseService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    @Optional() @Inject(MAT_DIALOG_DATA) public dialog_data: any = {}
  ) {}

  ngOnInit() {
    this.newExerciseForm = this.formbuilder.group({
      id: [""],
      name: ["", Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      description: ["", Validators.required],
    });
    if (this.route.params["value"]["id"]) {
      this.exerciseService
        .getExercise(this.route.params["value"]["id"])
        .subscribe((data: Exercise) => {
          this.newExerciseForm.get("id").setValue(data.id);
          this.newExerciseForm.get("name").setValue(data.name);
          this.newExerciseForm.get("price").setValue(data.price);
          this.newExerciseForm.get("description").setValue(data.description);
        });
    } else if (this.dialog_data && this.dialog_data["id"]) {
      this.exerciseService
        .getExercise(this.dialog_data["id"])
        .subscribe((data: Exercise) => {
          this.newExerciseForm.get("id").setValue(data.id);
          this.newExerciseForm.get("name").setValue(data.name);
          this.newExerciseForm.get("price").setValue(data.price);
          this.newExerciseForm.get("description").setValue(data.description);
        });
    }
  }
  onScroll(event) {} /* for wheel support */

  save(value) {
    let result = new Exercise();
    result.price = value.price;
    this.userService.loadCurrentUserData(this.userService.currentUser.email);
    result.authorId = this.userService.currentUser.id;
    console.log(result.authorId)
    result.id = value.id;
    result.name = value.name;
    result.description = value.description;
    
    
    this.exerciseService.saveExercise(result).subscribe((s:Exercise) => {
        this.router.navigateByUrl("/exercises");
    });
    
  }
}

