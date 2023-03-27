import {Injectable} from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import {CookiesService} from "./cookies.service";
import {User} from "../models/User";
import {Role} from "../models/Role";


@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: CookiesService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.auth.getToken()) {
      const tokenPayload = this.auth.getUserCookie();
      console.log(tokenPayload)
      tokenPayload.userRoles.filter((str: Role) => {
        return str.role === "XDD"
      });

      return tokenPayload.userRoles.length > 0;
    }
    return false;
  }

}
