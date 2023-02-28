import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApplicationConstants } from 'src/ApplicationConstants';
import { Router } from '@angular/router';
import { Question } from './Question';

@Injectable({
  providedIn: 'root'
})
export class RequestProcessorService {

  constructor(private http: HttpClient, private router: Router) { }

  private postOptions: Object = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    params: new HttpParams(),
    responseType: 'json'
  };

  payload: any;

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
