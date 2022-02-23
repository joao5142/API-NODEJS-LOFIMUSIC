import express from "express";
import { userRoutes } from "./routes/user.routes";
import { musicRoutes } from "./routes/music.routes";
const app = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/musics", musicRoutes);
app.listen(3333, () => {
  console.log("Servidor conectado");
});
