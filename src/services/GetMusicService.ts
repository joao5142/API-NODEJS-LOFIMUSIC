import { Music } from "../model/Music";
import { IMusicRepository } from "../repositories/IMusicRepository";

interface IRequest {
  music_id: string;
}
export class GetMusicService {
  constructor(private musicRepository: IMusicRepository) {}

  execute({ music_id }: IRequest): Music {
    const id = music_id;
    const music = this.musicRepository.findById({ id });

    return music;
  }
}
