import {Component} from '@angular/core';
import {User} from '../../models/User';
import {CookiesService} from "../../services/cookies.service";
import {AuthRequestsService} from "../../services/authentication/auth-requests.service";
import {UtilsService} from "../../services/utils.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  user: User = new User();
  valueToPass: string = "";

  constructor(private userAuthService: AuthRequestsService, private cookieService: CookiesService, private utilsService: UtilsService) {
  }

  register(user: User) {
    this.userAuthService.signUp(user)
      .subscribe({
        next: (res) => {
          this.cookieService.setUserCookie(res);
          this.utilsService.redirectToQuiz();
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

  displayPopup() {

  }

}
