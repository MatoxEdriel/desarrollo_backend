import { NextFunction, Request, Response, Router } from "express";
import { loginController, registerController } from "./controller";
//import { loginController, registerController } from "./controller";

const routes = Router();
//Se mandaria desde las peticiones de base de dato 
//!Como un adapter 

//definamos las rutas, primero es el nombre del endpoint 
//hacemos los parametros
//!No olvidar que si tenemos otro middleware o funcion se recomienda poner el metodo next: NextFunction
routes.get("/look", 
  async (req: Request, res: Response, next: NextFunction) => {
    try{
        //const response = await lookService(req)

       // res.status(201).json(response);


    }catch (error){

      throw error


    }




  }
);


routes.post(
    "/register",
  async (req: Request, res: Response, next: NextFunction) => { //Aseguras el uso de nextFunction para que se ejecute el siguiente middlware
    try {
      //El uso de await es relacionado a asyn
      const response = await registerController(req)
  
      res.status(201).json(response);
    } catch (error) {
      throw error
    }
  }
);
routes.post(
  "/login",
  async (req: Request, res: Response) => {
    try {
      const response = await loginController(req)
      res.status(200).json(response);
    } catch (error) {
      throw error
    }
  }
);

export default routes;
