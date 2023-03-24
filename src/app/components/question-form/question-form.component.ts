import { Component } from '@angular/core';
import { Question } from '../../models/Question';
import {AuthRequestsService} from '../../services/auth-requests-service'

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent {

  constructor(private requestProcessorService: AuthRequestsService) {

  }

  question: Question = new Question();

  sendQuestion(question: Question) {
    this.requestProcessorService.sendQuestionAddRequest(question)
    .subscribe(res => console.log(res));
  }

}
