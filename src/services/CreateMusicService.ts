import { Music } from "../model/Music";
import { IMusicRepository } from "../repositories/IMusicRepository";

interface IRequest {
  name: string;
  duration: string;
  author: string;
}
export class CreateMusicService {
  constructor(private musicRepository: IMusicRepository) {}

  execute({ name, duration, author }: IRequest) {
    const musicAlreadyExists = this.musicRepository.findByName({ name });

    if (musicAlreadyExists) {
      throw new Error("Music Already Exists");
    }

    this.musicRepository.create({ name, duration, author });
  }
}
