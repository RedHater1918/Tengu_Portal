import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Exercise } from './exercise.model';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: "root",
})
export class ExerciseService {
  constructor(private http: HttpClient, private userSevice:UserService) {}

  loadExercises() {
    return this.http.get<Exercise[]>(`/api/exercise/`);
  }
  getExercise(id) {
    return this.http.get(`/api/exercise/get/${id}`);
  }
  saveExercise(exercise: Exercise) {
    return this.http.post(`/api/exercise/save`, exercise);
  }
}
