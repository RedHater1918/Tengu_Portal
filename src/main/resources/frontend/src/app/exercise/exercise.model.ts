import { Fielded } from "../shared/fielded";

export const Status: any = ["Done", "Taken"];

export class Exercise implements Fielded {
  getFields: Function;


  id: string;
  name: string;
  description: string;
  price: number;


  static getFields() {
    return ["id", "name", "description", "price"];
  }
}