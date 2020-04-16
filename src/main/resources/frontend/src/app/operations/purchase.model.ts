import { User } from "../user/user.model";
import { Story } from "../story/story.model";

export class Purchase {
  id: string;
  user: User;
  story: Story;
  price: number;
  createdDate: Date;
}
