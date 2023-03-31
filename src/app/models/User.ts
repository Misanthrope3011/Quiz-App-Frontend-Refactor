import {Role} from "./Role";

export class User {

  username: string;
  password: string;
  firstName: string;
  lastName: string;
  accessToken: string;
  refreshToken: string;
  roles: Role[];

}
