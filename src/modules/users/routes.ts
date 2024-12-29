import { NextFunction, Request, Response, Router } from "express";

import { registerController, readController, updateController, deleteController } from "./controller";
import { IUser } from "../auth/repository";
import UserRepository from "./repository";



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
  
        await readController(req, res); 
    } catch (error) {
        next(error);  
    }
});


routesUser.put("/updateUser/:username", async (req: Request, res: Response) => {
    try {

        console.log("Username:", req.params.username);
        console.log("Body:", req.body);
        const updateUser = await updateController(req, res);

        res.status(200).json({
            message: "User updated successfully",
            user: updateUser // Devuelve los datos actualizados, opcional
        });
       
    } catch (error) {
        res.status(500).json({
            error: "error Ruta",
            details: "xd"

        });
     
    }

});



//!indicar que resultado 
// routesUser.put("/editUsers"){


// }


export default routesUser;