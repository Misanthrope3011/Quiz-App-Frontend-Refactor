import { Component } from '@angular/core';
import {Category} from "../models/Category";
import {AuthRequestsService} from "../services/auth-requests.service";
import {QuizRequestsService} from "../services/quiz-requests.service";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {

  constructor(private quizRequests: QuizRequestsService) {
  }

  category: Category = new Category();

  createCategory(category: Category) {
    this.quizRequests.addNewCategory(category)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

}
