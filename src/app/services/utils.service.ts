import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private router: Router) {
  }

  redirectTo(path: string) {
    return this.router.navigate([path]);
  }

  redirectToQuiz() {
   return this.router.navigate(['quiz']);
  }

}
