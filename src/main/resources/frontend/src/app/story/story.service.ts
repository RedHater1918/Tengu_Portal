import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Story } from "./story.model";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class StoryService {
  constructor(private http: HttpClient) {}

  loadStories() {
    return this.http.get<Story[]>(`/api/stories/`);
  }
  getStories(id): Observable<Story[]> {
    return this.http.get<Story[]>(`/api/stories/${id}`);
  }
  getStory(id) {
    return this.http.get(`/api/stories/get/${id}`);
  }
  saveStory(story: Story) {
    return this.http.post(`/api/stories/save`, story);
  }
}
