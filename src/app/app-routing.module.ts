import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyComponent } from './components/survey/survey.component';
import { QuestionFormComponent } from './components/question-form/question-form.component';
import { MainWindowComponent } from './components/main-window/main-window.component'
import { RegistrationComponent } from './components/registration/registration.component'
import {SignupComponent} from "./components/signup/signup.component";
import {AddCategoryComponent} from "./add-category/add-category.component";
import {AuthGuardService} from "./services/authguard.service";

const routes: Routes = [
  {path: '', component: MainWindowComponent},
  {path: 'survey/:id', component: SurveyComponent, canActivate: [AuthGuardService]},
  {path: 'question/add', component: QuestionFormComponent, canActivate: [AuthGuardService]},
  {path: 'category/add', component: AddCategoryComponent,  canActivate: [AuthGuardService]},
  {path: 'signup', component: RegistrationComponent},
  {path: 'signin', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
