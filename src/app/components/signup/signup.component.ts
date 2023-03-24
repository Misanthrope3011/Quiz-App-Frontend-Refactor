import {Component} from '@angular/core';
import {User} from "../../models/User";
import {AuthRequestsService} from "../../services/auth-requests-service";
import {CookiesService} from "../../services/cookies.service";
import {UserAuthService} from "../../services/user-auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(private requestProcessorService: AuthRequestsService, private cookieService: CookiesService, private userAuthService: UserAuthService) {
  }

  user: User = new User();

  login(user: User) {
    this.userAuthService.signIn(user)
      .subscribe({
        next: (res) => {
          this.cookieService.setUserCookie(res);
          console.log(res);
          console.log(this.cookieService.getToken());
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

}


