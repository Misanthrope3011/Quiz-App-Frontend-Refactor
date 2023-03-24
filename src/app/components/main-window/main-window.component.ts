import { Component } from '@angular/core';
import { AuthRequestsService } from '../../services/auth-requests-service';
import {Router} from '@angular/router';
import {Question} from '../../models/Question';
import { timer } from 'rxjs';

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.scss']
})
export class MainWindowComponent {

  hideStartPopup = false;

  startSurvey() {
    this.hideStartPopup = true;
    this.showMessageSuccess();
    this.requestProcessor.submitSurvey().subscribe(response => {
    this.requestProcessor.setPayload(response);
   });
  }

   showMessageSuccess(){
   timer(3000).subscribe(err => this.router.navigate(['/survey/1']));
  }

  content: Question[] = [];

  constructor(private requestProcessor: AuthRequestsService, private router: Router) {

  }

}
