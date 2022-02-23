import { IUserRepository } from "../repositories/IUserRepository";

interface IRequest {
  user_id: string;
}
export class DeleteUserService {
  constructor(private userRepository: IUserRepository) {}

  execute({ user_id }: IRequest) {
    this.userRepository.delete({ user_id });
  }
}
