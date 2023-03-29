import { Injectable } from '@angular/core';
import {CookiesService} from '../cookies.service';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RefreshTokenService {

  private postOptions: Object = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.cookiesService.getRefreshToken()
    }),
    params: new HttpParams(),
    responseType: 'json'
  };

  constructor(private httpClient: HttpClient, private cookiesService: CookiesService) { }

  getRefreshToken() {
    this.httpClient.post("/user/refreshToken", this.cookiesService.getRefreshToken()).subscribe(payload => console.log(payload));
  }

}
