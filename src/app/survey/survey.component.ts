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

  content: Question | undefined;
  hideStartPopup = false;
  routeId: number;
  answers: string[];

  constructor(private requestProcessorService: RequestProcessorService, private activatedRoute: ActivatedRoute, private router: Router) {
      activatedRoute.params.subscribe(err => {
        this.hideStartPopup = true;
        const id = activatedRoute.snapshot.url[activatedRoute.snapshot.url.length - 1].path;
        if(Number(id)) {
          this.routeId = Number.parseInt(id);
          this.content = this.requestProcessorService.getPayload()[this.routeId - 1];
          console.log(this.routeId)
        } else if(id == "start") {
          this.hideStartPopup = false;
        }
      });
    }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
      $event.returnValue = true;
    this.router.navigate(['']);

  }

  ngOnInit(): void {
    this.content = this.requestProcessorService.getPayload();
  }
  selectedAnswerChoiceButton($event: MouseEvent) {
    $event.stopPropagation(); // add this line
    this.routeId = this.routeId > 0 ?  this.routeId - 1 : 1;
    this.router.navigate(['/survey/',  this.routeId]);
  }

  onClickNextButton($event) {
    $event.stopPropagation(); // add this line
    this.routeId = this.routeId + 1;
   console.log("Clicked" +  this.routeId)
   this.router.navigate(['/survey/',  this.routeId]);
  }

  highlightAnswer($event) {
    const button = $event.target.innerHTML;
    console.log(button);

  }

}
