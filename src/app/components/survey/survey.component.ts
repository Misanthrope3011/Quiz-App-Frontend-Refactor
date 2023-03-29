import {Component, HostListener, OnInit} from '@angular/core';
import {QuizRequestsService} from '../../services/quiz-requests.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Question} from '../../models/Question';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  arrayContent: Question[] = [];
  content: Question = new Question();
  routeId: number;
  answers: string[];
  submitButtonAppear: boolean = false;
  messageResponse: string;

  constructor(private requestProcessorService: QuizRequestsService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    $event.returnValue = true;
  }

  redirectToNew($event) {
    if (this.routeId != this.arrayContent.length) {
      this.router.navigate(['/survey/', ++this.routeId]);
    }
  }

  ngOnInit(): void {
    this.arrayContent = this.requestProcessorService.getPayload();
    this.activatedRoute.params.subscribe(err => {
      const id = this.activatedRoute.snapshot.url[this.activatedRoute.snapshot.url.length - 1].path;
      if (Number(id)) {
        this.routeId = Number.parseInt(id);
        this.content = this.arrayContent[this.routeId - 1];
      }
    });
  }

  selectedAnswerChoiceButton($event: MouseEvent) {
    this.routeId = this.routeId > 1 ? this.routeId - 1 : 1;
    this.router.navigate(['/survey/', this.routeId]);
  }

  onClickNextButton($event) {
    if (this.routeId == this.arrayContent.length) {
      this.submitButtonAppear = true;
    } else {
      this.routeId = this.routeId + 1;
      console.log("Clicked" + this.routeId)
      this.router.navigate(['/survey/', this.routeId]);
    }

  }

  highlightAnswer($event) {
    this.arrayContent[this.routeId - 1].userAnswer = $event.target.value;
  }

  submitAnswers($event) {
    this.requestProcessorService.submitAnswers(this.arrayContent)
      .subscribe({
        next: (success) => this.messageResponse = success.toString(),
        error: (err) => this.messageResponse = err.error.text
      });
  }

}


















