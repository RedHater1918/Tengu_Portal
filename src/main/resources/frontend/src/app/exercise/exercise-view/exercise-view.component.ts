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
  status:string;
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
      this.userService.getStatusOfEx(this.route.params["value"]["id"]).subscribe(
        (s:any)=>{
          this.status = s.status;
        }
      );
  }
  ngOnInit() {
  }

  actionWithExercise(status){
   
    this.userService.actWithExrcise(this.exercise.id,status).subscribe(s=>
      {
        this.userService.loadCurrentUserData(this.userService.currentUser.email);
        if(status == 0){
          this.status = 'DONE';
        }else{
          this.status = 'TAKEN';
        }
      });
  }
}
