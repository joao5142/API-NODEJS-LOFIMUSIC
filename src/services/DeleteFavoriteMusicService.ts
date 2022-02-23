import { IUserRepository } from "../repositories/IUserRepository";

interface IRequest {
  user_id: string;
  music_id: string;
}
export class DeleteFavoriteMusicService {
  constructor(private userRepository: IUserRepository) {}

  execute({ user_id, music_id }: IRequest) {
    this.userRepository.deleteFavoriteMusic({ user_id, music_id });
  }
}
