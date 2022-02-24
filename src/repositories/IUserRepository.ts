import { Music } from "../model/Music";
import { User } from "../model/User";

interface ICreateUserDTO {
  username: string;
  email: string;
  password: string;
}
interface ICreateFavoriteSongDTO {
  user_id: string;
  music: Music;
}

interface IUpdateUserDTO {
  user_id: string;
  username: string;
  email: string;
  password: string;
}

interface IDeleteUserDTO {
  user_id: string;
}
interface IFindUserDTO {
  username: string;
}
interface IDeleteFavoriteMusicDTO {
  user_id: string;
  music_id: string;
}
interface IDeleteMusicAllUsersDTO {
  music_id: string;
}
interface IUpdateAllMusicsTDDO {
  music_id: string;
  name: string;
  duration: string;
  author: string;
}

interface IUserRepository {
  findByName({ username }: IFindUserDTO): User;
  getAll(): User[];
  create({ username, email, password }: ICreateUserDTO);
  addFavoriteSong({ music, user_id }: ICreateFavoriteSongDTO);
  delete({ user_id }: IDeleteUserDTO);
  update({ user_id, username, email, password }: IUpdateUserDTO);
  deleteFavoriteMusic({ user_id, music_id }: IDeleteFavoriteMusicDTO);
  deleteMusicAllUsers({ music_id }: IDeleteMusicAllUsersDTO);
  updateAllMusics({
    music_id,
    name,
    duration,
    author,
  }: IUpdateAllMusicsTDDO): void;
}

export {
  IUserRepository,
  ICreateUserDTO,
  ICreateFavoriteSongDTO,
  IDeleteUserDTO,
  IFindUserDTO,
  IUpdateUserDTO,
  IDeleteFavoriteMusicDTO,
  IDeleteMusicAllUsersDTO,
  IUpdateAllMusicsTDDO,
};
