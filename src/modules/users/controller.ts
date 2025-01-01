import { Request } from "express";
import { Response } from "express";
import { IUser } from "../auth/repository";
import UserRepository from "./repository";
import { IScriptSnapshot } from "typescript";
import { ResponseService } from "../../error/response.service";
import { ResponseModel } from "../../error/response.model";


export const registerController = async (req: Request) => {
    try {

        const { username, password } = req.body as IUser;
        return await new UserRepository().createUser({ username, password });
    } catch (error) {
        throw new Error("error");
    }
};

export const readController = async (req: Request, res: Response) => {
    try {

        const lstUser = await new UserRepository().readUsers()
        res.status(200).json(lstUser);

    } catch (error) {

        throw new Error("there[s not")



    }

}
export const updateController = async (req: Request, res: Response): Promise<void> => {
    try {
        const userNameToUpdate = req.params.username;
        const { username, password } = req.body as IUser;
        await new UserRepository().updateUsers(userNameToUpdate, username, password);
    } catch (error: any) {
        throw {
            code: 'USER_UPDATE_FAILED',
            message: `Error updating user: ${error.message}`,
            status: 500
        }
    }
}

export const deleteController = async (req: Request, res: Response) => {
    try {

        const userNameToDelete = req.params.username;

        await new UserRepository().deleteUser(userNameToDelete);


        // const { username, password } = req.body as IUser;
        // await new UserRepository().deleteUser({ username, password });
        // res.status(200).json({ message: 'Usuario eliminado correctamente' });
    } catch (error: any) {
        //!MANDAR UN JSONA
        throw {
            code: 'USER_DELETE_FAILED',
            message: `Error deleting user: ${error.message}`,
            status: 500 // Internal Server Error
        }


    }
}