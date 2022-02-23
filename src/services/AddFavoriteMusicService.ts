import { Music } from "../model/Music";
import { IUserRepository } from "../repositories/IUserRepository";

interface IRequest {
  music: Music;
  user_id: string;
}
export class AddFavoriteMusicService {
  constructor(private userRepository: IUserRepository) {}

  execute({ music, user_id }: IRequest) {
    this.userRepository.addFavoriteSong({ music, user_id });
  }
}
