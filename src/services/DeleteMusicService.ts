import { IMusicRepository } from "../repositories/IMusicRepository";
import { MusicRepository } from "../repositories/MusicRepository";
interface IRequest {
  id: string;
}

export class DeleteMusicService {
  constructor(private musicRepository: IMusicRepository) {}

  execute({ id }: IRequest) {
    this.musicRepository.delete({ id });
  }
}
