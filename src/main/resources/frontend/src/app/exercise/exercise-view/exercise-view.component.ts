import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { ExerciseService } from '../exercise.service';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-exercise-view',
  templateUrl: './exercise-view.component.html',
  styleUrls: ['./exercise-view.component.css']
})
export class ExerciseViewComponent implements OnInit {
  
  exercise:Exercise;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private exerciseService: ExerciseService,
    private userService: UserService
  ) {
    this.exerciseService
      .getExercise(this.route.params["value"]["id"])
      .subscribe((value: any) => {
        this.exercise = value;
      });
  }
  ngOnInit() {
  }

  actionWithExercise(status){
    this.userService.actWithExrcise(this.exercise.id,status).subscribe();
  }
}
