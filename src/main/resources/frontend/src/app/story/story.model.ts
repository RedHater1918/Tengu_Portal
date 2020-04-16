import { User } from "../user/user.model";
import { Fielded } from "../shared/fielded";

export class Story implements Fielded {
  getFields: Function;

  id: string;
  title: string;
  text: Blob;
  rating: number;
  purchased: boolean;
  author: User;
  createdDate: Date;
  price: number;

  static getFields() {
    return ["id", "title", "text", "author", "createdDate", "price"];
  }
}
