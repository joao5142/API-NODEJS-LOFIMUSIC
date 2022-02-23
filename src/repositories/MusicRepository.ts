import { Music } from "../model/Music";
import {
  ICreateMusicTDO,
  IFindByIdTDO,
  IFindByNameTDO,
  IMusicRepository,
  IUpdateMusicTDO,
  IDeleteMusicTDO,
} from "./IMusicRepository";
import { validate } from "uuid";
import { UserRepository } from "./UserRepository";
import { DeleteFavoriteMusicService } from "../services/DeleteFavoriteMusicService";
export class MusicRepository implements IMusicRepository {
  private musics;
  constructor() {
    this.musics = [];
  }
  delete({ id }: IDeleteMusicTDO): void {
    if (!validate(id)) {
      throw new Error("Id is not a valide uuid!");
    }
    const music = this.musics.find((music) => music.id == id);
    if (!music) {
      throw new Error("Music not found!");
    }
    this.musics = this.musics.filter((music) => music.id != id);
  }
  update({ id, name, duration, author }: IUpdateMusicTDO): void {
    if (!validate(id)) {
      throw new Error("Id is not  a valide uuid!");
    }
    const music = this.musics.find((music) => music.id == id);
    if (!music) {
      throw new Error("Music not found!");
    }
    Object.assign(music, {
      name,
      duration,
      author,
    });
  }
  findByName({ name }: IFindByNameTDO): Music {
    const music = this.musics.find((music) => music.name === name);

    return music;
  }
  findById({ id }: IFindByIdTDO): Music {
    if (!validate(id)) {
      throw new Error("Id is not  a valide uuid!");
    }
    const music = this.musics.find((music) => music.id === id);

    return music;
  }
  create({ name, duration, author }: ICreateMusicTDO): void {
    const music = new Music();

    Object.assign(music, { name, duration, author, created_at: new Date() });

    this.musics.push(music);
  }
  getAll(): Music[] {
    return this.musics;
  }
}
