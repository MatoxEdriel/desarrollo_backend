//por que por aqui ?
//!Permite leer y carar archivos desde node js
import fs from 'fs/promises';
//con esta libreria puedes manipular correctamente la ruta 
//!esto con el objetivo de que las ruta no solo sea en un solo IO, si no que cuando se use
//!docker ya corra ciertos archivos 
import path from "path";





interface IUser {
    username: string;
    password: string;
}

const users: IUser[] = []; // In-memory storage
//!si te das cuenta recibe como parametro el join 
//!la direccion de los archivos pero en una destructuracion 
const dataFilePath = path.join("src", "data", "users.json")
export default class AuthRepository {



    async readUser(filePath: string): void {
        const fullPath = path.resolve(filePath);

        fs.readFile(fullPath)


    }

    //promete que sera ingrsado un usuario User 
    //!Metodo nuevo 
    async readUsers(): Promise<IUser[]>{

        try {
            //File System FS  
            const data = await fs.readFile(dataFilePath, 'utf-8');
            return JSON.parse(data)

            
        } catch (error) {
                throw error
        }


    }




    async findByUsername(username: string): Promise<IUser | undefined> {
        return users.find(user => user.username === username);
    }

    async createUser(user: IUser): Promise<IUser> {
        users.push(user);
        return user;
    }



};
