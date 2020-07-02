import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { JwtResponse } from "./auth/jwt-response";
import { AuthLoginInfo } from "./auth/login-info";
import { SignUpInfo } from "./auth/signup-info";
import { Router } from "@angular/router";
import { User } from "./user.model";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class UserService {
  public currentUser: User;
  status:string[]=["DONE","TAKEN"];
  private loginUrl = "/api/users/auth/signin";
  private signupUrl = "/api/users/auth/signup";

  constructor(private http: HttpClient, private router: Router) {}

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }

  loadCurrentUserData(email, callback?) {
    this.http.get<User>(`/api/users/${email}`).subscribe((value: User) => {
      this.currentUser = value;
      if (callback) callback();
    });
  }

  buy(storyId) {
    return this.http.get(
      `/api/operations/buy/${this.currentUser.id}/${storyId}`
    );
  }

  rate(storyId, value) {
    console.log(storyId, value);
    return this.http.get(`/api/operations/rate/${this.currentUser.id}/${storyId}/${value}`
    );
  }
  rateStoryPrice(storyId,value){
    console.log(storyId, value);
    return this.http.get(`/api/stories/save/priceRate/${this.currentUser.id}/${storyId}/${value}`);
  }
  actWithExrcise(exerciseId:string, status:number){
    console.log(this.currentUser.id,exerciseId,status);
    return this.http.get(`/api/exercise/save/exerciseComp/${this.currentUser.id}/${exerciseId}/${this.status[status]}`);
  }
  getExerciseByStatus(status){
    return this.http.get(`/api/exercise/getByStat/${this.currentUser.id}/${this.status[status]}`);
  }
  loadUsers() {
    return this.http.get("/api/users/");
  }

  getUser(id) {
    return this.http.get(`/api/users/get/${id}`);
  }
  saveUser(user: User) {
    return this.http.post(`/api/users/save`, user);
  }
}
