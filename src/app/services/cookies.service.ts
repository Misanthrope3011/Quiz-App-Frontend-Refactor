import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class CookiesService {
  USER_COOKIE_NAME = "USER_TOKEN";
  USER_TOKEN = "";

  constructor(private cookieService: CookieService) {}

  public setUserCookie(data: User) {
    this.cookieService.set(this.USER_COOKIE_NAME, JSON.stringify(data));
  }

  public getUserCookie() {
    return JSON.parse(this.cookieService.get(this.USER_COOKIE_NAME));
  }

  public getToken() {
    const userCookie = this.cookieService.get(this.USER_COOKIE_NAME);
    if (userCookie !== null && userCookie.length !== 0) {
      let usertoken = JSON.parse(userCookie).accessToken;
      if(usertoken !== null) {
        this.USER_TOKEN = usertoken;
      }
    }
    return this.USER_TOKEN;
  }

}
