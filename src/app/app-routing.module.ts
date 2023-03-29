import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SurveyComponent} from './components/survey/survey.component';
import {QuestionFormComponent} from './components/question-form/question-form.component';
import {MainWindowComponent} from './components/main-window/main-window.component'
import {RegistrationComponent} from './components/registration/registration.component'
import {SignupComponent} from "./components/signup/signup.component";
import {AddCategoryComponent} from "./components/add-category/add-category.component";
import {AuthGuardService} from "./services/authguard.service";
import {QuestionViewComponent} from "./components/question-view/question-view.component";

const routes: Routes = [
  {path: '', redirectTo: 'signin', pathMatch: 'full'},
  {path: 'signin', component: SignupComponent},
  {path: 'survey/:id', component: SurveyComponent, canActivate: [AuthGuardService]},
  {path: 'question/add', component: QuestionFormComponent, canActivate: [AuthGuardService]},
  {path: 'question/edit/:id', component: QuestionFormComponent, canActivate: [AuthGuardService]},
  {path: 'category/add', component: AddCategoryComponent, canActivate: [AuthGuardService]},
  {path: 'signup', component: RegistrationComponent},
  {path: 'quiz', component: MainWindowComponent, canActivate: [AuthGuardService]},
  {path: 'questions', component: QuestionViewComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
