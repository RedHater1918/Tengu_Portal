import { Fielded } from "../shared/fielded";
import { User } from '../user/user.model';

export const Status: any = ["Done", "Taken"];

export class Exercise implements Fielded {
  getFields: Function;


  id: string;
  name: string;
  authorId:number;
  description: string;
  price: number;


  static getFields() {
    return ["id", "name","authorId", "description", "price"];
  }
}