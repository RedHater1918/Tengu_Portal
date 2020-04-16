import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { StoriesComponent } from "./story/stories/stories.component";
import { StoryAddComponent } from "./story/story-add/story-add.component";
import { StoryViewComponent } from "./story/story-view/story-view.component";
import { LogInComponent } from "./user/log-in/log-in.component";
import { RegisterComponent } from "./user/register/register.component";
import { ResetPasswordComponent } from "./user/reset-password/reset-password.component";
import { AdminComponent } from "./admin/admin.component";

import { AuthGuardService } from "./user/auth/auth-guard.service";

const routes: Routes = [
  { path: "signin", component: LogInComponent },
  { path: "register", component: RegisterComponent },
  { path: "reset-password", component: ResetPasswordComponent },
  {
    path: "editor/:id",
    component: StoryAddComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: "editor",
    component: StoryAddComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: "stories/:id",
    component: StoryViewComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: "",
    component: StoriesComponent,
    canActivate: [AuthGuardService],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
