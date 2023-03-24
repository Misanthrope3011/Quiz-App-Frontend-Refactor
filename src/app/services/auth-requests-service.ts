import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {ApplicationConstants} from 'src/ApplicationConstants';
import {Router} from '@angular/router';
import {Question} from '../models/Question';
import {CookiesService} from "./cookies.service";


@Injectable({
  providedIn: 'root'
})
export class AuthRequestsService {

  payload: any;

  private postOptions: Object = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.cookieService.getToken()
    }),
    params: new HttpParams(),
    responseType: 'json'
  };

  constructor(private http: HttpClient, private router: Router, private cookieService: CookiesService) { }

  public submitSurvey() {
    return this.http.post<Question[]>(ApplicationConstants.BASE_URL + "/generateSurvey", JSON.stringify({category: "INNE", size: 10}), this.postOptions);
  }

   public sendQuestionAddRequest(question: Question) {
      return this.http.post<Question>(ApplicationConstants.BASE_URL + "/question/add", JSON.stringify(question), this.postOptions);
   }

   public submitAnswers(question: Question[]) {
      return this.http.post<Question>(ApplicationConstants.BASE_URL + "/survey/submit", JSON.stringify(question), this.postOptions);
   }

  public getPayload(): any {
    return this.payload;
  }

  public setPayload(payload: any): void {
    this.payload = payload;
  }

}
