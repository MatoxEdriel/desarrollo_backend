import { IUser } from "../auth/repository";
import fs from 'fs/promises';
import path from "path";
import { UserValidation } from "./validation";
import { error } from "console";
import { UserException } from "../../error/UserException";


const dataPathUser = path.join("src", "data", "users.json");


export default class UserRepository {

    //en esta capa me ocupo a recopilar informacion 


    //haremos el CRUD
    //!usarem promise porque prometere xd que tendra un usuario 

    //*CREATE   USAR EN CONFIRMACION
    //Aqui hacemos la validacion si ya existe ee uaurio 
    //!Ahora implementaremos las validaciones aqui 

    async createUser(user: IUser): Promise<IUser> {
        const lstUsers = await this.readUsers();
      
        //Aqui se implementaria las debidas 
      
        const {username } = user;
        const userExists = lstUsers.find(u => u.username === user.username);
        if (!userExists) {
            lstUsers.push(user);
        }
        else {
            throw new UserException(`the username ${username} is already taken`);
        }

       


        await this.writeUsers(lstUsers);
        return user;

    }



    //*

    async writeUsers(users: IUser[]): Promise<void> {

        await fs.writeFile(dataPathUser, JSON.stringify(users, null, 2), 'utf-8');

    }




    async readUsers(): Promise<IUser[]> {
        try {
            const data = await fs.readFile(dataPathUser, 'utf-8');
            return JSON.parse(data)

        } catch (error) {
            throw error
        }

    }

    //hare la primera prueba donde no manejare errores desde aqui 
    //!Quite el tryCatch para que otra capa se encargue del error 
    //!Al paasar esto a la siguiente se contraolada desde controller

    async updateUsers(userName: string, newUserName: string, newPassword: string): Promise<void> {
        const lstUser = this.readUsers();
        const userExist = (await lstUser).find(u => u.username === userName)
        if (!userExist) {
            throw new UserException("Usuario no encontrado  X_X ");
        }
        else {
            userExist.username = newUserName;
            userExist.password = newPassword;
            await this.writeUsers(await lstUser);
        }

    }


    async deleteUser(userName: string): Promise<void> {
        try {
            const lstUser = this.readUsers();
            const indexUser = (await lstUser).findIndex(existUser => existUser.username === userName)
            if (indexUser == -1) {
                throw new Error("üsuario no encontrado");
            }
            else {
                (await lstUser).splice(indexUser, 1);
                console.log("BORRADO")
                await this.writeUsers(await lstUser);
            }
        } catch (error) {
            throw new Error("no se ha leido ");
        }

    }









}