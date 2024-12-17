import express, { NextFunction, Request, Response } from "express";

const app = express();

const prefix: string = "/api";

app.get(
  `${prefix}/auth`,
  
  async (req: Request, res: Response, next: NextFunction) => {
    // ? Funcion principal
    res.send("Hola mundo");
  }
);

const port: number = 3000;
app.listen(port, () => {
    console.log('El servidor esta levantado en el puerto:', port);
});
