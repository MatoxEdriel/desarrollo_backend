import express, { NextFunction, Request, Response } from "express";
import { PORT } from "./environments/env";

const app = express();

const prefix: string = "/api";

app.get(
  `${prefix}/auth`,
  
  async (req: Request, res: Response, next: NextFunction) => {
    // ? Funcion principal
    res.send("Hola mundo");
  }
);

const port: number = Number(PORT);
app.listen(port, () => {
    console.log('El servidor esta levantado en el puerto:', port);
});
