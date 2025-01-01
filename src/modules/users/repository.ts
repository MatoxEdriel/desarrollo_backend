import { IUser } from "../auth/repository";
import fs from 'fs/promises';
import path from "path";


const dataPathUser = path.join("src", "data", "users.json");


export default class UserRepository {

    //en esta capa me ocupo a recopilar informacion 


    //haremos el CRUD
    //!usarem promise porque prometere xd que tendra un usuario 

    //*CREATE   USAR EN CONFIRMACION

    async createUser(user: IUser): Promise<IUser> {
        try {
            const users = await this.readUsers();
            users.push(user);
            await this.writeUsers(users);
            return user;
        } catch (error) {
            throw new Error("ERROR ")
        }
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
        //UPDATE 
        //DELETE 
    }

    async updateUsers(userName: string, newUserName: string, newPassword: string): Promise<void> {
        try {
            const lstUser = this.readUsers();
            const userExist = (await lstUser).find(u => u.username === userName)
            if (!userExist) {
                throw new Error("User not found");
            }
            else {
                userExist.username = newUserName;
                userExist.password = newPassword;
                await this.writeUsers(await lstUser);
            }
        } catch (error) {
            throw new Error("ERROR de acta")
        }
    }




    //DELETE
    // async deleteUser(user: IUser): Promise<void> {
    //     const lstUser = await this.readUsers();
    //     const index = lstUser.findIndex(existingUser => existingUser.username === user.username);
    //     if (index !== -1) {
    //         lstUser.splice(index, 1);
    //         console.log('Usuario eliminado:', user);
    //     } else {
    //         console.log('Usuario no encontrado');
    //     }

    // }

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