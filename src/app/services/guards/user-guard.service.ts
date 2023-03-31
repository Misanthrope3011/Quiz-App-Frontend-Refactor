import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";
import {CookiesService} from "../cookies.service";
import {Role} from "../../models/Role";

@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate {
  constructor(public auth: CookiesService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.auth.getToken()) {
      const tokenPayload = this.auth.getUserCookie();
      tokenPayload.userRoles.filter((str: Role) => {
        return str.role === "USER" || str.role === "ADMIN"
      });
      console.log(tokenPayload.userRoles);
      return tokenPayload.userRoles.length > 0;
    }

    return false;
  }

}
