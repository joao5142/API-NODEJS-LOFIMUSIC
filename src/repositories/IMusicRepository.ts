import { Music } from "../model/Music";

interface ICreateMusicTDO {
  name: string;
  author: string;
  duration: string;
}
interface IFindByIdTDO {
  id: string;
}
interface IFindByNameTDO {
  name: string;
}
interface IDeleteMusicTDO {
  id: string;
}
interface IUpdateMusicTDO {
  id: string;
  name: string;
  duration: string;
  author: string;
}
interface IMusicRepository {
  findById({ id }: IFindByIdTDO): Music;
  findByName({ name }: IFindByNameTDO): Music;
  create({ name, duration, author }: ICreateMusicTDO): void;
  delete({ id }: IDeleteMusicTDO): void;
  update({ id, name, duration, author }: IUpdateMusicTDO): void;
  getAll(): Music[];
}

export {
  IMusicRepository,
  ICreateMusicTDO,
  IFindByNameTDO,
  IFindByIdTDO,
  IUpdateMusicTDO,
  IDeleteMusicTDO,
};
