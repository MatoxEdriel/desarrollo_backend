import { IUser } from "../auth/repository";
import fs from 'fs/promises';
import path from "path";


const dataPathUser = path.join("src", "data", "usersLogin.json");


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

        } catch (error) {

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


        

    }










}