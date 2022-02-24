import { v4 as uuid } from "uuid";
import { Music } from "./Music";

export class User {
  id?: string;
  username: string;
  email: string;
  password: string;
  created_at: Date;
  favorite_songs: Music[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
