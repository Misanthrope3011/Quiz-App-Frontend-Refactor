import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplicationConstants } from 'src/ApplicationConstants';
import { Router } from '@angular/router';
import { Question } from './Question';

@Injectable({
  providedIn: 'root'
})
export class RequestProcessorService {

  constructor(private http: HttpClient, private router: Router) { }

  payload: any;

  public submitSurvey() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers };

    return this.http.post<Question[]>(ApplicationConstants.BASE_URL + "/generateSurvey", JSON.stringify({category: "INNE", size: 10}), options);
  }

  public getPayload(): any {
    return this.payload;
  }

  public setPayload(payload: any): void {
    this.payload = payload;
  }

}
