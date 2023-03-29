import {Component, OnInit} from '@angular/core';
import {CookiesService} from "./services/cookies.service";
import {User} from "./models/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  userCookiePresent: boolean;
  user: User;

  constructor(private cookieService: CookiesService) {}

  ngOnInit() {
    this.userCookiePresent = this.cookieService.getUserCookie() == null;
    if(this.userCookiePresent) {
      this.user = this.cookieService.getUserCookie();
    }
  }


  title = 'Survey_New';

}

