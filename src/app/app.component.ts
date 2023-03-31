import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CookiesService} from "./services/cookies.service";
import {User} from "./models/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges{

  userCookiePresent: boolean;
  user: User = new User();

  constructor(private cookieService: CookiesService, private router: Router) {}

  ngOnInit() {
    this.userCookiePresent = this.cookieService.getUserCookie() !== null;
    if(this.userCookiePresent) {
      this.user = this.cookieService.getUserCookie();
    }
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  logout() {
    this.cookieService.logout()
    this.router.navigate(['signin']);
  }


  title = 'Survey_New';

}

