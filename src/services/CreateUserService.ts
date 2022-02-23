import { IUserRepository } from "../repositories/IUserRepository";

interface IRequest {
  username: string;
  email: string;
  password: string;
}

export class CreateUserService {
  constructor(private userRepository: IUserRepository) {}

  execute({ username, email, password }: IRequest): void {
    const userAlredyExists = this.userRepository.findByName({ username });

    if (userAlredyExists) {
      throw new Error("User already exist");
    }

    this.userRepository.create({ username, email, password });
  }
}
