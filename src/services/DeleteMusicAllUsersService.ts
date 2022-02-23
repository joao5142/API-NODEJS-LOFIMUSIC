import { IUserRepository } from "../repositories/IUserRepository";

interface IRequest {
  music_id: string;
}
export class DeleteMusicAllUsersService {
  constructor(private userRepository: IUserRepository) {}

  execute({ music_id }: IRequest) {
    this.userRepository.deleteMusicAllUsers({ music_id });
  }
}
