import {Role} from "./Role";

export class User {

  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token: string;
  roles: Role[];

}
