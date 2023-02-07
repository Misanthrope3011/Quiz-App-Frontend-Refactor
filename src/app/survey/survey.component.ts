import { Component, Input, OnInit } from '@angular/core';
import { RequestProcessorService } from '../request-processor.service';
import {ActivatedRoute} from '@angular/router';
import { Question } from '../Question';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  content: Question | undefined;
  
  constructor(private requestProcessorService: RequestProcessorService, private activatedRoute: ActivatedRoute) {
      activatedRoute.params.subscribe(err => {
        const id = activatedRoute.snapshot.url[activatedRoute.snapshot.url.length - 1].path
        console.log(Number(id))
        if(Number(id)) {
          console.log(this.requestProcessorService.getPayload()[id]);
        }
      });
    }


  ngOnInit(): void {
    this.content = this.requestProcessorService.getPayload();
  }

onSubmitSurveyButton() {

}

}
