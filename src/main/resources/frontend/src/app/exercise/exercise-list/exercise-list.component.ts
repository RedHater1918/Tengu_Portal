import { Component, Input } from "@angular/core";
import { Exercise } from '../exercise.model';
import { UserService } from 'src/app/user/user.service';
import { ExerciseService } from '../exercise.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent {

  @Input() exercise: Exercise;
  @Input() st: string;
  deleted:boolean;
  edit(id) {
    this.router.navigateByUrl(`editor/exercise/${this.exercise.id}`);
  }

  actionWithExercise(status){
    this.userService.actWithExrcise(this.exercise.id,status).subscribe(s=>
      {
        this.userService.loadCurrentUserData(this.userService.currentUser.email);
      });
  }
  deleteExFromList(){
    this.userService.deleteEx(this.exercise.id).subscribe();
    this.deleted = true;
  }
  constructor(public userService: UserService, private router: Router) {}
}

