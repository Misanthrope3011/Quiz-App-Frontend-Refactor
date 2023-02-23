import {Component, HostListener, Input, OnInit} from '@angular/core';
import { RequestProcessorService } from '../request-processor.service';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';
import { Question } from '../Question';

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

  constructor(private requestProcessorService: RequestProcessorService, private activatedRoute: ActivatedRoute, private router: Router) {
      activatedRoute.params.subscribe(err => {
        const id = activatedRoute.snapshot.url[activatedRoute.snapshot.url.length - 1].path;
        if(Number(id)) {
          this.routeId = Number.parseInt(id);
          this.content = this.arrayContent[this.routeId - 1];
          console.log(this.routeId)
        }
      });
    }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
      $event.returnValue = true;
    this.router.navigate(['']);

  }

  ngOnInit(): void {
    this.arrayContent = this.requestProcessorService.getPayload();
  }

  selectedAnswerChoiceButton($event: MouseEvent) {
    this.routeId = this.routeId > 1 ?  this.routeId - 1 : 1;
    this.router.navigate(['/survey/',  this.routeId]);
  }

  onClickNextButton($event) {
  if(this.routeId == this.arrayContent.length) {
    this.submitButtonAppear = true;
    console.log(this.arrayContent)
  } else {
     this.routeId = this.routeId + 1;
     console.log("Clicked" +  this.routeId)
     this.router.navigate(['/survey/',  this.routeId]);
   }

  }

  highlightAnswer($event) {
    const value = $event.target.value;
    this.arrayContent[this.routeId - 1].answer = value;
  }

}
