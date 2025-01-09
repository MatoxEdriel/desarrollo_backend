//por que por aqui ?
//!Permite leer y carar archivos desde node js
import { write } from 'fs';
import fs from 'fs/promises';
//con esta libreria puedes manipular correctamente la ruta 
//!esto con el objetivo de que las ruta no solo sea en un solo IO, si no que cuando se use
//!docker ya corra ciertos archivos 
import path from "path";





export interface IUser {
    username: string;
    password: string;
}

// const users: IUser[] = []; // In-memory storage
//!si te das cuenta recibe como parametro el join 
//!la direccion de los archivos pero en una destructuracion 
const dataFilePath = path.join("src", "data", "users.json")
export default class AuthRepository {




    //promete que sera ingrsado un usuario User 
    //!Metodo nuevo 
    //guardado en una carpeta 
    async writeUsers(users: IUser[]): Promise<void> {

        await fs.writeFile(dataFilePath, JSON.stringify(users, null, 2), 'utf-8');

    }

    async readUsers(): Promise<IUser[]> {

        try {
            //File System FS  
            const data = await fs.readFile(dataFilePath, 'utf-8');
            return JSON.parse(data)


        } catch (error) {
            throw error
        }


    }




    async findByUsername(username: string): Promise<IUser | undefined> {

        const users = await this.readUsers();

        return users.find(user => user.username === username);
    }

    //!Cambiaremos el metodo para que se adapte de acuedo a los datos actuales 
    async createUser(user: IUser): Promise<IUser> {
        try {
            //claro usabamos como simulacion los metodo deun aarray para meter mas 
            //!esto ya seria un array 
            //!leo array
            const users = await this.readUsers();
            //Pense que simplemente seria un push pero se guardaria dentro del nuevo arreglo 
            users.push(user);
            //!Ahora se debe usar la funcion que hicismo write 
            //ya que se debe guardar los nuevos datos en el archivo 
            await this.writeUsers(users);

            return user;

        } catch (error) {
            throw error

        }

    }



};
