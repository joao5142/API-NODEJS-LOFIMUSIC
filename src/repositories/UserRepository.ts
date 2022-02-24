import { validate } from "uuid";
import { Music } from "../model/Music";
import { User } from "../model/User";
import {
  ICreateUserDTO,
  IUserRepository,
  ICreateFavoriteSongDTO,
  IDeleteUserDTO,
  IFindUserDTO,
  IUpdateUserDTO,
  IDeleteFavoriteMusicDTO,
  IDeleteMusicAllUsersDTO,
  IUpdateAllMusicsTDDO,
} from "./IUserRepository";

class UserRepository implements IUserRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }
  updateAllMusics({
    music_id,
    name,
    duration,
    author,
  }: IUpdateAllMusicsTDDO): void {
    this.users.forEach((user) => {
      const music = user.favorite_songs.find((music) => music.id == music_id);

      Object.assign(music, {
        music_id,
        name,
        duration,
        author,
      });
    });
  }
  deleteFavoriteMusic({ user_id, music_id }: IDeleteFavoriteMusicDTO): void {
    if (!validate(user_id)) {
      throw new Error("User id is not a valide uuid");
    }
    if (!validate(music_id)) {
      throw new Error("Music id is not a valide uuid");
    }
    const user = this.users.find((user) => user.id == user_id);

    if (!user) {
      throw new Error("User not found");
    }

    const musicExists = user.favorite_songs.find(
      (music) => music.id == music_id
    );

    if (!musicExists) {
      throw new Error("Music not found");
    }

    user.favorite_songs = user.favorite_songs.filter(
      (music) => music.id != music_id
    );
  }
  update({ user_id, username, email, password }: IUpdateUserDTO): void {
    if (!validate(user_id)) {
      throw new Error("Id is not a valide uuid");
    }

    const user = this.users.find((user) => user.id == user_id);
    if (!user) {
      throw new Error("User not found!");
    }

    Object.assign(user, {
      username,
      email,
      password,
    });
  }

  addFavoriteSong({ music, user_id }: ICreateFavoriteSongDTO): void {
    if (!validate(user_id)) {
      throw new Error("Id is not a valide uuid!");
    }
    const user = this.users.find((user) => user.id == user_id);

    if (!user) {
      throw new Error("User not Found!");
    }
    user.favorite_songs.push(music);
  }

  findByName({ username }: IFindUserDTO): User {
    const user = this.users.find((user) => user.username === username);

    return user;
  }
  getAll(): User[] {
    return this.users;
  }
  create({ username, email, password }: ICreateUserDTO): void {
    const user = new User();

    Object.assign(user, {
      //passa os dados para um objeto
      username,
      email,
      password,
      created_at: new Date(),
      favorite_songs: [],
    });

    this.users.push(user);
  }
  delete({ user_id }: IDeleteUserDTO): void {
    if (!validate(user_id)) {
      throw new Error("Id is not a valide uuid");
    }
    let filtredArray: User[] = this.users.filter((user) => user.id !== user_id);

    this.users = filtredArray;
  }
  deleteMusicAllUsers({ music_id }: IDeleteMusicAllUsersDTO): void {
    this.users.forEach((user) => {
      user.favorite_songs = user.favorite_songs.filter(
        (music) => music.id !== music_id
      );
    });
  }
}

export { UserRepository };
