import { Request } from "express";
import { Response } from "express";
import { IUser } from "../auth/repository";
import UserRepository from "./repository";
import { IScriptSnapshot } from "typescript";
import { ResponseService } from "../../error/response.service";
import { ResponseModel } from "../../error/response.model";
import { UserValidation } from "./validation";
import { ErrorCodes } from "../../enums/codesHttpEnum";
import { error } from 'console';
import { UserException } from "../../error/UserException";

import { UserService } from "./services";
import { IUserAttributes } from "../../model/User";



export const registerController = async (req: Request) => {
    const { username, password } = req.body as IUser;
    return await new UserRepository().createUser({ username, password });
};

export const RegisterController = async (req: Request) => {
    try {
        const payload = req.body as IUserAttributes
        return await new UserService().registerService(payload)
    } catch (error) {
        throw error
    }
}


export const readController = async (req: Request) => {
    try {
        const payload = req.body as IUserAttributes[]
        return await new UserService().ReadService(payload)
        

    } catch (error) {
        throw new Error("there[s not")
    }

}
// export const ReadController = async (req: Request) => {
//     try {
//         const users = await new UserService().ReadService()

//     } catch (error) {

//     }

// }
// //Al subir esto podria manejar dicho error 
export const updateController = async (req: Request, res: Response): Promise<void> => {
    try {
        const userNameToUpdate = req.params.username;
        const { username, password } = req.body as IUser;
        await new UserRepository().updateUsers(userNameToUpdate, username, password);
    } catch (error) {

        throw new UserException("User_Update_Failer");

    }
}


export const loginController = async (req: Request) => {
    try {
        const { username, password } = req.body;

        //!Manejo de service donde se puede usar el modelo de neogocio dentro de controller 
        const responseC = await new UserRepository().loginAccess(username, password);

        return responseC;


    } catch (error) {
        throw new Error("Error de controller")
    }


}


export const deleteController = async (req: Request, res: Response) => {
    try {

        const userNameToDelete = req.params.username;

        await new UserRepository().deleteUser(userNameToDelete);


    } catch (error: any) {
        //!MANDAR UN JSONA
        throw {
            code: 'USER_DELETE_FAILED',
            message: `Error deleting user: ${error.message}`,
            status: 500
        }


    }
}