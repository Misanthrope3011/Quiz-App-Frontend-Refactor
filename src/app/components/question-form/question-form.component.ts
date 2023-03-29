import {Component, OnInit} from '@angular/core';
import {Question} from '../../models/Question';
import {QuizRequestsService} from '../../services/quiz-requests.service'
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  question: Question = new Question();

  constructor(private requestProcessorService: QuizRequestsService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(err => {
      const id = this.getLastPartFromPath();
      if(Number(id)) {
        this.requestProcessorService.getQuestionById(Number(id)).subscribe(res => {
          this.question = res;
        })
      }
    });
  }

  ngOnInit() {
  }

  sendQuestion(question: Question) {
    if(Number(this.getLastPartFromPath())) {
      this.requestProcessorService.editQuestionRequest(question)
        .subscribe(res => console.log(res));
    } else {
      this.requestProcessorService.sendQuestionAddRequest(question)
        .subscribe(res => console.log(res));
    }
  }

  private getLastPartFromPath() {
    return this.activatedRoute.snapshot.url[this.activatedRoute.snapshot.url.length - 1].path;
  }


}
