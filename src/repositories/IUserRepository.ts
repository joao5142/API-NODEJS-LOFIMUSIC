import { Music } from "../model/Music";
import { User } from "../model/User";

interface ICreateUserTDO {
  username: string;
  email: string;
  password: string;
}
interface ICreateFavoriteSongTDO {
  user_id: string;
  music: Music;
}

interface IUpdateUserTDO {
  user_id: string;
  username: string;
  email: string;
  password: string;
}

interface IDeleteUserTDO {
  user_id: string;
}
interface IFindUserTDO {
  username: string;
}
interface IDeleteFavoriteMusicTDO {
  user_id: string;
  music_id: string;
}
interface IDeleteMusicAllUsersTDO {
  music_id: string;
}
interface IUpdateAllMusicsTDDO {
  music_id: string;
  name: string;
  duration: string;
  author: string;
}

interface IUserRepository {
  findByName({ username }: IFindUserTDO): User;
  getAll(): User[];
  create({ username, email, password }: ICreateUserTDO);
  addFavoriteSong({ music, user_id }: ICreateFavoriteSongTDO);
  delete({ user_id }: IDeleteUserTDO);
  update({ user_id, username, email, password }: IUpdateUserTDO);
  deleteFavoriteMusic({ user_id, music_id }: IDeleteFavoriteMusicTDO);
  deleteMusicAllUsers({ music_id }: IDeleteMusicAllUsersTDO);
  updateAllMusics({
    music_id,
    name,
    duration,
    author,
  }: IUpdateAllMusicsTDDO): void;
}

export {
  IUserRepository,
  ICreateUserTDO,
  ICreateFavoriteSongTDO,
  IDeleteUserTDO,
  IFindUserTDO,
  IUpdateUserTDO,
  IDeleteFavoriteMusicTDO,
  IDeleteMusicAllUsersTDO,
  IUpdateAllMusicsTDDO,
};
