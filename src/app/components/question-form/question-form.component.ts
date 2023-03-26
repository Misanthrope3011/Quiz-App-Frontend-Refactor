import { Component } from '@angular/core';
import { Question } from '../../models/Question';
import {QuizRequestsService} from '../../services/quiz-requests.service'

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent {

  constructor(private requestProcessorService: QuizRequestsService) {

  }

  question: Question = new Question();

  sendQuestion(question: Question) {
    console.log(question)
    this.requestProcessorService.sendQuestionAddRequest(question)
    .subscribe(res => console.log(res));
  }

}
