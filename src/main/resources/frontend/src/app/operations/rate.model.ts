import { User } from "../user/user.model";
import { Story } from "../story/story.model";

export class Rate {
  id: string;
  user: User;
  story: Story;
  value: number;
}
