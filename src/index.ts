import express, { NextFunction, Request, Response } from "express";
import { PORT } from "./environments/env";
import authRoutes from "./modules/user/routes"
import routesUser from "./modules/auth/routes";

const app = express();

app.use(express.json())

const prefix: string = "/api";

app.use(`${prefix}/auth`, authRoutes);
app.use(`${prefix}/users`, routesUser);

const port: number = Number(PORT);
app.listen(port, () => {
  console.log("El servidor esta levantado en el puerto:", port);
});
