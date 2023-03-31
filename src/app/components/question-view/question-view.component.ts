import {Component, OnInit} from '@angular/core';
import {QuizRequestsService} from "../../services/quiz-requests.service";
import {Question} from "../../models/Question";
import {UtilsService} from "../../services/utils.service";

@Component({
  selector: 'app-question-view',
  templateUrl: './question-view.component.html',
  styleUrls: ['./question-view.component.scss']
})
export class QuestionViewComponent implements OnInit {

  questions: Question[] = [];

  constructor(private requestService: QuizRequestsService, private utilsService: UtilsService) {
  }

  editElement(id: number) {
    this.utilsService.redirectTo('question/edit/' + id);
  }

  removeElement(id: number) {
    this.requestService.deleteQuestion(id).subscribe({
      next: (res) => {
        console.log(res);
        window.location.reload()
      }, error: (err) => console.log(err)
    });
  }

  ngOnInit() {
    this.requestService.getAllQuestions()
      .subscribe({
        next:
          (res) => this.questions = res,
        error: (err) => console.log(err)
      })
  }

}
