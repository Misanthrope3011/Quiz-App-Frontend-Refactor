import {Component, HostListener, OnInit} from '@angular/core';
import {QuizRequestsService} from '../../services/quiz-requests.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Question} from '../../models/Question';
import {UtilsService} from "../../services/utils.service";

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

  constructor(private requestProcessorService: QuizRequestsService, private activatedRoute: ActivatedRoute, private router: Router,
              private utilsService: UtilsService) {
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    $event.preventDefault()
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
      if(this.arrayContent === null) {
        this.router.navigate(['quiz']);
      }
      if (Number(id)) {
        if(Number(id) < this.routeId + 1) {
          this.router.navigate(['/survey/', this.routeId]);
        } else {
          this.routeId = Number.parseInt(id);
        }
        if(typeof this.arrayContent === "undefined") {
          this.router.navigate(['quiz']);
        } else {
          this.content = this.arrayContent[this.routeId - 1];
        }
      }
    });

  }

  selectedAnswerChoiceButton($event: MouseEvent) {
    this.routeId = this.routeId > 1 ? this.routeId - 1 : 1;
    this.router.navigate(['/survey/', this.routeId]);
  }

  onClickNextButton($event) {
    if (this.routeId == this.arrayContent.length - 1) {
      this.submitButtonAppear = true;
    }

    this.routeId = this.routeId + 1;
    this.router.navigate(['/survey/', this.routeId]);
  }


  highlightAnswer($event) {
    this.arrayContent[this.routeId - 1].userAnswer = $event.target.value;
  }

  submitAnswers($event) {
    this.requestProcessorService.submitAnswers(this.arrayContent)
      .subscribe({
        next: (success) => { this.messageResponse = success.toString()
          this.utilsService.showMessageSuccess().subscribe(res => {
            this.router.navigate(['quiz'])
          });
        },
        error: (err) => this.messageResponse = err.error.text
      });
  }

}


















