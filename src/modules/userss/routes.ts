import { NextFunction, Request, response, Response, Router } from "express";

import { registerController, readController, updateController, deleteController, loginController, RegisterController } from "./controller";
import { IUser } from "../auth/repository";
import { ResponseService } from '../../error/response.service';
import { ErrorCodes, HttpStatus } from "../../enums/codesHttpEnum";
import { UserValidation } from './validation';
import { UserException } from "../../error/UserException";
import { HttpResponse } from "../../utils/httpResponse";








const routesUser = Router();


routesUser.post("/login", async (req: Request, res: Response, next: NextFunction) => {
    try {
      
        const userLogin = await loginController(req);
       

        res.status(HttpStatus.ok).json(userLogin)
    } catch (error) {
        res.status(HttpStatus.internalServerError).json({ message: "Error al intentar iniciar sesión." });
    }
});

routesUser.post("/register", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body;
        await UserValidation.validationTypeUserName(username);
        await UserValidation.validationTypePassword(password);
        const response = await RegisterController(req);

        res.status(HttpStatus.ok).json(ResponseService.success({
            response: response,
        }));

    } catch (error) {
        if (error instanceof UserException) {
            res.status(HttpStatus.badRequest).json(ResponseService.error(
                ErrorCodes.INVALID_REQUEST,
                error.message,
                HttpStatus.badRequest
            ));
        }
        else {
            res.status(HttpStatus.internalServerError).json(ResponseService.exception("Ocurrio un error inesperado en el servidor"))
        }
    }
});

/**
 * @swagger
 * /getUsers:
 *   get:
 *     summary: Obtiene una lista de usuarios.
 *     description: Devuelve una lista con todos los usuarios registrados.
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       name:
 *                         type: string
 *                         example: "John Doe"
 *                       email:
 *                         type: string
 *                         example: "johndoe@example.com"
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: "Error al obtener usuarios."
 */

routesUser.get("/getUsers", async (req: Request, res: Response, next: NextFunction) => {
    try {

        const lstUser = await readController(req);
    
        res.status(HttpStatus.ok).json(ResponseService.success(lstUser));
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