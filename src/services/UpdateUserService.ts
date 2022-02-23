import { IUserRepository } from "../repositories/IUserRepository";
import { UserRepository } from "../repositories/UserRepository";

interface IRequest {
  user_id: string;
  username: string;
  email: string;
  password: string;
}
export class UpdateUserService {
  constructor(private userRepository: IUserRepository) {}

  execute({ user_id, username, password, email }: IRequest) {
    this.userRepository.update({ user_id, username, password, email });
  }
}
