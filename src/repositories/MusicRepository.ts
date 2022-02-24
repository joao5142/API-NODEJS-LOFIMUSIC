import { Music } from "../model/Music";
import {
  ICreateMusicDTO,
  IFindByIdDTO,
  IFindByNameDTO,
  IMusicRepository,
  IUpdateMusicDTO,
  IDeleteMusicDTO,
} from "./IMusicRepository";
import { validate } from "uuid";
import { UserRepository } from "./UserRepository";
import { DeleteFavoriteMusicService } from "../services/DeleteFavoriteMusicService";
export class MusicRepository implements IMusicRepository {
  private musics;
  constructor() {
    this.musics = [];
  }
  delete({ id }: IDeleteMusicDTO): void {
    if (!validate(id)) {
      throw new Error("Id is not a valide uuid!");
    }
    const music = this.musics.find((music) => music.id == id);
    if (!music) {
      throw new Error("Music not found!");
    }
    this.musics = this.musics.filter((music) => music.id != id);
  }
  update({ id, name, duration, author }: IUpdateMusicDTO): void {
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
  findByName({ name }: IFindByNameDTO): Music {
    const music = this.musics.find((music) => music.name === name);

    return music;
  }
  findById({ id }: IFindByIdDTO): Music {
    if (!validate(id)) {
      throw new Error("Id is not  a valide uuid!");
    }
    const music = this.musics.find((music) => music.id === id);

    return music;
  }
  create({ name, duration, author }: ICreateMusicDTO): void {
    const music = new Music();

    Object.assign(music, { name, duration, author, created_at: new Date() });

    this.musics.push(music);
  }
  getAll(): Music[] {
    return this.musics;
  }
}
