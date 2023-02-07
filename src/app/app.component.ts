import { Component, ɵɵsetComponentScope } from '@angular/core';
import { RequestProcessorService } from './request-processor.service';
import {Router} from '@angular/router';
import {Question} from './Question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Survey_New';
  message = 'Hello from Parent Component';

  content: Question[] = [];


  constructor(private requestProcessor: RequestProcessorService, private router: Router) {

  }

  startSurvey() {
    this.requestProcessor.submitSurvey().subscribe(response => { 
    this.requestProcessor.setPayload(response);
    this.router.navigate(['/survey/start']);
   });
  }

}

