import { IUserRepository } from "../repositories/IUserRepository";

interface IRequest {
  music_id: string;
  name: string;
  duration: string;
  author: string;
}
export class UpdateAllMusicsUsersService {
  constructor(private userRepository: IUserRepository) {}
  execute({ music_id, name, duration, author }: IRequest) {
    this.userRepository.updateAllMusics({ music_id, name, duration, author });
  }
}
