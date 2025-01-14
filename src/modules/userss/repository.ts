import { IUser } from "../auth/repository";
import fs from 'fs/promises';
import path from "path";
import { UserValidation } from "./validation";
import { error } from "console";
import { UserException } from "../../error/UserException";



import { Jwt, sign } from 'jsonwebtoken';


import { passwordHelper } from "../../utils/httpResponse";
import { string } from "joi";
import { JWT_SECRET } from "../../environments/env";
//Se tiene acceso a la base de dato en cuestion 

const dataPathUser = path.join("src", "data", "users.json");

const jwt: string = String(JWT_SECRET);

export default class UserRepository {
    async createUser(user: IUser): Promise<IUser> {
        const lstUsers = await this.readUsers();
        const { username, password } = user;
        const passwordHasheado = await passwordHelper.hashPassword(password);
        const newUser = { username, password: passwordHasheado };
        const userExists = lstUsers.find(u => u.username === user.username);
        if (!userExists) {
            lstUsers.push(newUser);
            await this.writeUsers(lstUsers);
        }
        else {
            throw new UserException(`the username ${username} is already taken`);
        }
        return newUser;
    }


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

    async findByUsername(username: string): Promise<IUser | null> {
        try {
            const lstUsers = await this.readUsers();
            const userToEvaluate = lstUsers.find(user => user.username === username)
            return userToEvaluate || null;
        } catch (error) {
            throw new UserException("Error reading users or finding the username.");
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





    async loginAccess(username: string, password: string) {
        const getAllUser = await this.readUsers();

        const userToLogin = getAllUser.find(u => u.username === username);
        console.log("JWT_SECRET:", jwt); // Debe mostrar una cadena válida
      

        if (!userToLogin) {
            throw new UserException("no existe la cuenta ");
        }
      
        const passwordIsValida = await passwordHelper.verifyPassword(password, userToLogin.password)
       
        if (!passwordIsValida) {
            throw new UserException("Invalid username or password.");

        } else {

            const token = sign({ username: userToLogin.username }, jwt, { expiresIn: '1h' });
            console.log("Generated Token:", token);

            return {
                username: userToLogin.username,
                token
            }
        }
    }
}