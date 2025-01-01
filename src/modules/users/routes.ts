import { NextFunction, Request, response, Response, Router } from "express";

import { registerController, readController, updateController, deleteController } from "./controller";
import { IUser } from "../auth/repository";
import UserRepository from "./repository";
import { ResponseService } from '../../error/response.service';
import { HttpStatus } from "../../enums/codesHttpEnum";




const routesUser = Router();




//!CREATE
routesUser.post("/registrar", async (req: Request, res: Response, next: NextFunction) => {
    try {
        //!INVESTIGAR SI ES BUENA PRACTICAR PONER ESTOS DATOS AQUI 
        const timeCurrently = new Date();
        const response = await registerController(req);
        res.status(HttpStatus.ok).json(ResponseService.success({
            response: response,
            createAt: timeCurrently
        }
        ));
    } catch (error) {
        throw new Error("AQUI");
    }
});




//??implementacion de nueva clase de control de error 



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
        const responseUpdate = ResponseService.success(updateUser)
        res.status(responseUpdate.statusCode).json(responseUpdate)

    } catch (error) {

        const responseErroUpdate = ResponseService.exception("error de actualizacion");
        res.status(responseErroUpdate.statusCode).json(responseErroUpdate);

    }

});

routesUser.delete("/deleteUser/:username", async (req: Request, res: Response) => {
    try {
        const deleteUser = await deleteController(req, res);
        res.status(HttpStatus.ok).json(ResponseService.success(deleteUser));
    } catch (error) {
        const responseError = ResponseService.exception("error de ruta");
        res.status(responseError.statusCode).json(responseError)

    }
})





//!indicar que resultado 
// routesUser.put("/editUsers"){


// }


export default routesUser;