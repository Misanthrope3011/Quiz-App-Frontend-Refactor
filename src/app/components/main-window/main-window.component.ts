import {Component, OnInit} from '@angular/core';
import {QuizRequestsService} from '../../services/quiz-requests.service';
import {Router} from '@angular/router';
import {Question} from '../../models/Question';
import {timer} from 'rxjs';
import {Category} from "../../models/Category";

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.scss']
})
export class MainWindowComponent implements OnInit{

  content: Question[] = [];
  hideStartPopup = false;
  categories: Category[];

  constructor(private requestProcessor: QuizRequestsService, private router: Router) {
  }

  startSurvey() {
    this.hideStartPopup = true;
    this.showMessageSuccess();
    const value = (Number)((<HTMLSelectElement>document.getElementById('categorySelect')).value);
    this.requestProcessor.submitSurvey(this.categories[value]).subscribe(response => {
      this.requestProcessor.setPayload(response);
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

  showMessageSuccess() {
    timer(3000).subscribe(err => this.router.navigate(['/survey/1']));
  }

}
