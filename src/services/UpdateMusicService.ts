import { IMusicRepository } from "../repositories/IMusicRepository";
import { MusicRepository } from "./../repositories/MusicRepository";

interface IRequest {
  name: string;
  id: string;
  duration: string;
  author: string;
}

export class UpdateMusicService {
  constructor(private musicRepository: IMusicRepository) {}

  execute({ id, name, duration, author }: IRequest) {
    this.musicRepository.update({ id, name, duration, author });
  }
}
