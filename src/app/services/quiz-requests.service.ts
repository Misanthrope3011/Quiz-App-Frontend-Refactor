import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {ApplicationConstants} from 'src/ApplicationConstants';
import {Router} from '@angular/router';
import {Question} from '../models/Question';
import {CookiesService} from "./cookies.service";
import {Category} from "../models/Category";


@Injectable({
  providedIn: 'root'
})
export class QuizRequestsService {

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

  public getCategories() {
    return this.http.get<Category[]>(ApplicationConstants.BASE_URL + "/admin/categories", this.postOptions);
  }

  public submitSurvey(category: Category) {
    return this.http.post<Question[]>(ApplicationConstants.BASE_URL + "/user/generateSurvey", JSON.stringify(category), this.postOptions);
  }

  public submitAnswers(question: Question[]) {
    return this.http.post<Question>(ApplicationConstants.BASE_URL + "/user/survey/submit", JSON.stringify(question), this.postOptions);
  }

  public sendQuestionAddRequest(question: Question) {
      return this.http.post<Question>(ApplicationConstants.BASE_URL + "/admin/question/add", JSON.stringify(question), this.postOptions);
   }

  public addNewCategory(category: Category) {
    console.log(category)
    return this.http.post<Category>(ApplicationConstants.BASE_URL + "/admin/category/add", JSON.stringify(category), this.postOptions);
  }

  public getPayload(): any {
    return this.payload;
  }

  public setPayload(payload: any): void {
    this.payload = payload;
  }

}
