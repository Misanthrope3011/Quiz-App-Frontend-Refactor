import {Component, OnInit} from '@angular/core';
import {QuizRequestsService} from '../../services/quiz-requests.service';
import {Router} from '@angular/router';
import {Question} from '../../models/Question';
import {timer} from 'rxjs';
import {Category} from "../../models/Category";
import {QuizConfig} from "../../models/QuizConfig";
import {UtilsService} from "../../services/utils.service";

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.scss']
})
export class MainWindowComponent implements OnInit {

  content: Question[] = [];
  hideStartPopup = false;
  categories: Category[];
  quizConfig: QuizConfig = new QuizConfig();
  error: string;

  constructor(private requestProcessor: QuizRequestsService, private utilsService: UtilsService, private router: Router) {
  }

  startSurvey(config: QuizConfig) {
    this.hideStartPopup = true;
    this.requestProcessor.submitSurvey(config).subscribe({
      next: (response) => {
        this.requestProcessor.setPayload(response);
        if (this.requestProcessor.getPayload().length < 2) {

        } else {
          this.utilsService.showMessageSuccess().subscribe(res => {
             this.router.navigate(['/survey/1'])
          });
        }
      }, error: (error) => {
        console.log(error)
        this.error = error.error;
      }
    });
  }

  ngOnInit() {
    this.requestProcessor.getCategories().subscribe({
      next: (value) => {
        console.log(value)
        this.categories = value;
      },
      error: err => console.log(err)
    })
  }


}
