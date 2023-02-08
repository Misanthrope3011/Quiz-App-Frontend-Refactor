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

  constructor(private requestProcessorService: RequestProcessorService, private activatedRoute: ActivatedRoute, private router: Router) {
      activatedRoute.params.subscribe(err => {
        this.hideStartPopup = true;
        const id = activatedRoute.snapshot.url[activatedRoute.snapshot.url.length - 1].path;
        if(Number(id)) {
          this.content = this.requestProcessorService.getPayload()[id];
        } else if(id == "start") {
          this.hideStartPopup = false;
        }
      });
    }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
      $event.returnValue = true;
  }

  ngOnInit(): void {
    this.content = this.requestProcessorService.getPayload();
  }

onSubmitSurveyButton() {

}

}
