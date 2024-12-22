import { NextFunction, Request, Response, Router } from "express";

import { registerController, readController,updateController,deleteController } from "./controller";


const routesUser = Router();



//Haremos primero el CREATE
//!CREATE
routesUser.post("/registrar", async (req: Request, res: Response, next: NextFunction) => {
    try {
        //recibira esto 
        const response = await registerController(req);
        res.status(201).json(response)
    } catch (error) {
        throw new Error("AQUI");
    }
});

routesUser.get("/getUsers", async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Llamamos al controlador, el cual maneja la respuesta directamente
        await readController(req, res);  // Pasamos req, res, y next como parámetros a readController
    } catch (error) {
        next(error);  // Si ocurre un error, lo pasamos al siguiente middleware (por ejemplo, un handler de errores)
    }
});


//!indicar que resultado 
// routesUser.put("/editUsers"){


// }


export default routesUser;