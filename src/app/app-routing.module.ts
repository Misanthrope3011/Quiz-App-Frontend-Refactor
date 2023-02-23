import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyComponent } from './survey/survey.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { MainWindowComponent } from './main-window/main-window.component'

const routes: Routes = [
  {path: '', component: MainWindowComponent},
  {path: 'survey/:id', component: SurveyComponent},
  {path: 'question/add', component: QuestionFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
