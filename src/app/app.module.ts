import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyComponent } from './components/survey/survey.component';
import { QuestionFormComponent } from './components/question-form/question-form.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MainWindowComponent } from './components/main-window/main-window.component';
import { TimerComponent } from './components/timer/timer.component';
import { SignupComponent } from './components/signup/signup.component';
import { PopupComponent } from './components/popup/popup.component';
import {AddCategoryComponent} from "./components/add-category/add-category.component";
import {AuthGuardService} from "./services/authguard.service";
import { NavigationComponent } from './components/navigation/navigation.component';
import { QuestionViewComponent } from './components/question-view/question-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    QuestionFormComponent,
    RegistrationComponent,
    MainWindowComponent,
    TimerComponent,
    SignupComponent,
    PopupComponent,
    AddCategoryComponent,
    NavigationComponent,
    QuestionViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
