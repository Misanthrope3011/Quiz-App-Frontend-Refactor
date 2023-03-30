import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {User} from "../../models/User";
import {ApplicationConstants} from "../../../ApplicationConstants";

@Injectable({
  providedIn: 'root'
})
export class AuthRequestsService {

  private httpOptions: Object = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    params: new HttpParams(),
    responseType: 'json'
  };

  constructor(private httpClient: HttpClient) { }

  public signUp(user: User) {
    return this.httpClient.post<User>(ApplicationConstants.BASE_URL + "/register", JSON.stringify(user), this.httpOptions);
  }

  public signIn(user: User) {
    return this.httpClient.post<User>(ApplicationConstants.BASE_URL + "/authenticate", JSON.stringify(user), this.httpOptions);
  }

}

