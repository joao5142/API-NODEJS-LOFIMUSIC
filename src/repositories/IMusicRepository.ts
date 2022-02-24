import { Music } from "../model/Music";

interface ICreateMusicDTO {
  name: string;
  author: string;
  duration: string;
}
interface IFindByIdDTO {
  id: string;
}
interface IFindByNameDTO {
  name: string;
}
interface IDeleteMusicDTO {
  id: string;
}
interface IUpdateMusicDTO {
  id: string;
  name: string;
  duration: string;
  author: string;
}
interface IMusicRepository {
  findById({ id }: IFindByIdDTO): Music;
  findByName({ name }: IFindByNameDTO): Music;
  create({ name, duration, author }: ICreateMusicDTO): void;
  delete({ id }: IDeleteMusicDTO): void;
  update({ id, name, duration, author }: IUpdateMusicDTO): void;
  getAll(): Music[];
}

export {
  IMusicRepository,
  ICreateMusicDTO,
  IFindByNameDTO,
  IFindByIdDTO,
  IUpdateMusicDTO,
  IDeleteMusicDTO,
};
