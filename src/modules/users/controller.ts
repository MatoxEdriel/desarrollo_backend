import { Request } from "express";
import { Response } from "express";
import { IUser } from "../auth/repository";
import UserRepository from "./repository";
import { IScriptSnapshot } from "typescript";


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
export const updateController = async (req: Request, res: Response) => {

    try {

        const { username, password } = req.body as IUser;

        const user = await new UserRepository().readUsers();

        const userFounded = user.find(userExiting => userExiting.username === username);

        //necesitas una forma de traer ese usuario 

        if (!userFounded) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        } else {
            return await new UserRepository().updateUsers(userFounded, username, password);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el usuario' });
    }

    //!QUIZAS DEBA TENER UN METODO QUE ACTUALICE LA ARRAY 

    /*
    async updateUsers(users: IUser[]): Promise<void> {
        try {
            // Actualiza el archivo o la base de datos con el array actualizado
            await this.writeUsers(users);  // Asegúrate de que `writeUsers` guarda los datos actualizados
        } catch (error) {
            throw new Error("Error al actualizar los usuarios: " + error.message);
        }
    }
    
    
    */

}

export const deleteController = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body as IUser;
        await new UserRepository().deleteUser({ username, password });
        res.status(200).json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el usuario'});
    }
}