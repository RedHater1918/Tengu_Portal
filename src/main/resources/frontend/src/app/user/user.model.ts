import { Fielded } from "../shared/fielded";

export const Roles: any = ["Administrator", "Author", "Reader"];

export class User implements Fielded {
  getFields: Function;

  id: number;
  email: string;
  role: string;
  nickName: string;
  registrationDate: Date;
  lastLoginDate: Date;
  points: number;

  static getFields() {
    return [
      "id",
      "email",
      "role",
      "nickName",
      "points",
      "registrationDate",
      "lastLoginDate",
    ];
  }
}
