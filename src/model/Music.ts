import { v4 as uuid } from "uuid";

export class Music {
  id?: string;
  name: string;
  duration: string;
  author: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
