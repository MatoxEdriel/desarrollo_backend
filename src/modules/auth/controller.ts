import { Request } from "express";
import { Response } from "express";
import { IUser } from "../user/repository";
import UserRepository from "./repository";
import { IScriptSnapshot } from "typescript";
import { ResponseService } from "../../error/response.service";
import { ResponseModel } from "../../error/response.model";
import { UserValidation } from "./validation";
import { ErrorCodes } from "../../enums/codesHttpEnum";
import { error } from 'console';
import { UserException } from "../../error/UserException";


export const registerController = async (req: Request) => {
        const { username, password } = req.body as IUser;
        return await new UserRepository().createUser({ username, password });
};

export const readController = async (req: Request, res: Response) => {
    try {
//!quitar res
        const lstUser = await new UserRepository().readUsers()
        res.status(200).json(lstUser);

    } catch (error) {

        throw new Error("there[s not")



    }

}
//Al subir esto podria manejar dicho error 
export const updateController = async (req: Request, res: Response): Promise<void> => {
    try {
        const userNameToUpdate = req.params.username;
        const { username, password } = req.body as IUser;
        await new UserRepository().updateUsers(userNameToUpdate, username, password);
    } catch (error) {

        throw new UserException("User_Update_Failer");
        
        // throw {
        //     code: 'USER_UPDATE_FAILED',
        //     message: `Error updating user: ${error.message}`,
        //     status: 500
        // }
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