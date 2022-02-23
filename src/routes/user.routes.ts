import { Router } from "express";
import { Music } from "../model/Music";
import { UserRepository } from "../repositories/UserRepository";
import { AddFavoriteMusicService } from "../services/AddFavoriteMusicService";
import { CreateUserService } from "../services/CreateUserService";
import { DeleteFavoriteMusicService } from "../services/DeleteFavoriteMusicService";
import { DeleteUserService } from "../services/DeleteUserService";
import { GetMusicService } from "../services/GetMusicService";
import { UpdateUserService } from "../services/UpdateUserService";
import { musicRepository } from "./music.routes";

const userRepository = new UserRepository();

const userRoutes = Router();

userRoutes.post("/", (request, response) => {
  const { username, email, password } = request.body;
  console.log(request.body);
  const createUserService = new CreateUserService(userRepository);

  try {
    createUserService.execute({ username, email, password });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }

  return response.status(201).send();
});

userRoutes.get("/", (request, response) => {
  const users = userRepository.getAll();
  return response.status(200).json(users);
});

userRoutes.patch("/favoritemusic/:id", (request, response) => {
  const { id: music_id } = request.params;
  const { userid } = request.headers;
  console.log(request.headers);
  try {
    const getMusicService = new GetMusicService(musicRepository);
    const music: Music = getMusicService.execute({ music_id });
    const user_id = String(userid);

    const addFavoriteMusicService = new AddFavoriteMusicService(userRepository);
    addFavoriteMusicService.execute({ music, user_id });
  } catch (err) {
    return response.status(400).json({ error: err });
  }

  return response.status(200).send();
});
userRoutes.delete("/favoritemusic/:id", (request, response) => {
  const { id: music_id } = request.params;
  const { userid } = request.headers;

  const user_id = String(userid);

  try {
    const deleteFavoriteMusicService = new DeleteFavoriteMusicService(
      userRepository
    );
    deleteFavoriteMusicService.execute({ user_id, music_id });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
  return response.status(200).send();
});
userRoutes.delete("/:id", (request, response) => {
  const { id: user_id } = request.params;

  try {
    const deleteUserService = new DeleteUserService(userRepository);

    deleteUserService.execute({ user_id });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
  return response.status(200).send();
});

userRoutes.put("/:id", (request, response) => {
  const { id } = request.params;
  const { username, email, password } = request.body;
  const user_id = String(id);

  try {
    const updateUserService = new UpdateUserService(userRepository);
    updateUserService.execute({ user_id, username, email, password });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
  return response.status(200).send(0);
});

export { userRoutes, userRepository };
