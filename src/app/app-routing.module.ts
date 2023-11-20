import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SurveyComponent} from './components/survey/survey.component';
import {QuestionFormComponent} from './components/question-form/question-form.component';
import {MainWindowComponent} from './components/main-window/main-window.component'
import {RegistrationComponent} from './components/registration/registration.component'
import {SigninComponent} from "./components/signup/signin.component";
import {AddCategoryComponent} from "./components/add-category/add-category.component";
import {AuthGuardService} from "./services/guards/authguard.service";
import {QuestionViewComponent} from "./components/question-view/question-view.component";
import {UserGuardService} from "./services/guards/user-guard.service";
import {PasswordChangeComponent} from "./components/password-change/password-change.component";

const routes: Routes = [
  {path: '', redirectTo: 'signin', pathMatch: 'full'},
  {path: 'signin', component: SigninComponent},
  {path: 'survey/:id', component: SurveyComponent, canActivate: [AuthGuardService]},
  {path: 'question/add', component: QuestionFormComponent, canActivate: [UserGuardService]},
  {path: 'question/edit/:id', component: QuestionFormComponent, canActivate: [UserGuardService]},
  {path: 'category/add', component: AddCategoryComponent, canActivate: [UserGuardService]},
  {path: 'signup', component: RegistrationComponent},
  {path: 'quiz', component: MainWindowComponent, canActivate: [AuthGuardService]},
  {path: 'questions', component: QuestionViewComponent, canActivate: [UserGuardService]},
  {path: 'passwordChange', component: PasswordChangeComponent, canActivate: [UserGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
