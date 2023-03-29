import {Component} from '@angular/core';
import {User} from "../../models/User";
import {QuizRequestsService} from "../../services/quiz-requests.service";
import {CookiesService} from "../../services/cookies.service";
import {AuthRequestsService} from "../../services/auth-requests.service";
import {Router} from "@angular/router";
import {UtilsService} from "../../services/utils.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(private router: Router, private requestProcessorService: AuthRequestsService, private cookieService: CookiesService, private userAuthService: AuthRequestsService,
              private utilsService: UtilsService) {
  }

  user: User = new User();

  login(user: User) {
    this.userAuthService.signIn(user)
      .subscribe({
        next: (res) => {
          this.cookieService.setUserCookie(res);
          console.log(this.cookieService.getToken());
          this.utilsService.redirectToQuiz();
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

}


