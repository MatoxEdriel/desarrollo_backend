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
            throw error
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

    async updateUsers(user: IUser, newUserName: string, newPassword: string): Promise<IUser> {
        return{
            //implicitamente usa las propiedades de los datos ingresados en los parametros y los toma
            //!en este caso lo toma y con eso se puede editar los datos ingresados
            ...user,
            username: newUserName,
            password : newPassword
        }
    }

    // async updateUsers(user: IUser, newUserName: string, newPassword: string): Promise<void> {
    //     user.username = newUserName;
    //     user.password = newPassword;
    // }


    //DELETE
    async deleteUser(user: IUser): Promise<void> {
        const lstUser = await this.readUsers();        
        const index = lstUser.findIndex(existingUser => existingUser.username === user.username); 
        if (index !== -1) {
            lstUser.splice(index, 1);  
            console.log('Usuario eliminado:', user);
        } else {
            console.log('Usuario no encontrado');
        }
    
    }
    








}