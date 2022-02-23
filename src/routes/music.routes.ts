import { Router } from "express";
import { MusicRepository } from "../repositories/MusicRepository";
import { CreateMusicService } from "../services/CreateMusicService";
import { DeleteMusicAllUsersService } from "../services/DeleteMusicAllUsersService";
import { DeleteMusicService } from "../services/DeleteMusicService";
import { UpdateAllMusicsUsersService } from "../services/UpdateAllMusicsUsersService";
import { UpdateMusicService } from "../services/UpdateMusicService";
import { userRepository } from "./user.routes";

const musicRoutes = Router();
const musicRepository = new MusicRepository();

musicRoutes.post("/", (request, response) => {
  const { name, duration, author } = request.body;

  try {
    const createMusicService = new CreateMusicService(musicRepository);
    createMusicService.execute({ name, duration, author });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
  return response.status(200).send();
});
musicRoutes.get("/", (request, response) => {
  const all = musicRepository.getAll();

  return response.status(200).json(all);
});

musicRoutes.delete("/:id", (request, response) => {
  const { id } = request.params;

  try {
    const deleteMusicService = new DeleteMusicService(musicRepository);
    deleteMusicService.execute({
      id,
    });
    const music_id = String(id);
    const deleteMusicAllUsersService = new DeleteMusicAllUsersService(
      userRepository
    );
    deleteMusicAllUsersService.execute({ music_id });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
  return response.status(200).send();
});

musicRoutes.put("/:id", (request, response) => {
  const { id } = request.params;
  const { name, duration, author } = request.body;

  try {
    const updateMusicService = new UpdateMusicService(musicRepository);
    updateMusicService.execute({ id, name, duration, author });

    const music_id = String(id);
    const updateAllMusicsUsersService = new UpdateAllMusicsUsersService(
      userRepository
    );
    updateAllMusicsUsersService.execute({ music_id, name, duration, author });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
  return response.status(200).send();
});
export { musicRoutes, musicRepository };
