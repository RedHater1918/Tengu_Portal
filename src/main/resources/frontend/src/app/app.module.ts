import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppMaterialModule } from "./app-material.module";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoriesComponent } from "./story/stories/stories.component";
import { StoryAddComponent } from "./story/story-add/story-add.component";
import { StoryListViewComponent } from "./story/story-list-view/story-list-view.component";
import { RatingComponent } from "./shared/rating/rating.component";
import { StoryViewComponent } from "./story/story-view/story-view.component";
import { EditorComponent } from "./shared/editor/editor.component";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { LogInComponent } from "./user/log-in/log-in.component";
import { RegisterComponent } from "./user/register/register.component";
import { ResetPasswordComponent } from "./user/reset-password/reset-password.component";
import { UserViewComponent } from "./user/user-view/user-view.component";

import { httpInterceptorProviders } from "./user/auth/auth-interceptor";
import { AuthGuardService } from "./user/auth/auth-guard.service";
import { AdminComponent } from "./admin/admin.component";
import { EditComponent } from "./shared/rating/edit/edit.component";
import { CrudTableComponent } from "./shared/crud-table/crud-table.component";
import { DeleteDialogComponent } from "./shared/delete/delete.dialog.component";
import { UserEditComponent } from "./user/user-edit/user-edit.component";

@NgModule({
  declarations: [
    AppComponent,
    StoriesComponent,
    StoryAddComponent,
    StoryListViewComponent,
    RatingComponent,
    StoryViewComponent,
    EditorComponent,
    LogInComponent,
    UserViewComponent,
    RegisterComponent,
    ResetPasswordComponent,
    AdminComponent,
    EditComponent,
    CrudTableComponent,
    DeleteDialogComponent,
    UserEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [httpInterceptorProviders, AuthGuardService],
  bootstrap: [AppComponent],
  entryComponents: [
    DeleteDialogComponent,
    UserEditComponent,
    StoryAddComponent,
  ],
})
export class AppModule {}
