import { Component } from '@angular/core';
import {User} from '../../models/User';
import { QuizRequestsService } from '../../services/quiz-requests.service';
import {CookiesService} from "../../services/cookies.service";
import {AuthRequestsService} from "../../services/auth-requests.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  user: User = new User();
  valueToPass: string = "";

  constructor(private userAuthService: AuthRequestsService, private cookieService: CookiesService) {}

  register(user: User) {
    this.userAuthService.signUp(user)
      .subscribe({
        next: (res) => {
          this.cookieService.setUserCookie(res);
          console.log(this.cookieService.getToken());
          },
        error: (err) => {
          console.log(err);
        }
      });
  }

  displayPopup() {

  }

}