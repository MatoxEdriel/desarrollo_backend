//usaremos namespace 
//? escomo un tipo de clase, teniendo 3 tipo de respuesta en namespace
import bcrypt from 'bcrypt';

import { SALT_ROUNDS } from '../environments/env';


//import { SALT_ROUNDS } from "../environments/env";


//!con el generico podemos definir el tipo de data cuando usemos el interfaz jeje
export interface IHttpResponse<T> {


    code: number,
    data?: T,
    message: string


}




//!REPASAR 
//Estudiar esta estructura de error mediante interfaces 

//invesigar namespace y como se usa variablez de entorno y por que funciono DIFERENTE EN OTRA CARPETA 
//?Repasar nameSpace concepto
const salt_rounds: number = Number(SALT_ROUNDS);


export namespace passwordHelper {

    export async function hashPassword(password: string): Promise<string> {
        const hashedPassword = await bcrypt.hash(password, salt_rounds);
        return hashedPassword;

    }

    export async function verifyPassword(password: string, passwordHasheado: string): Promise<boolean> {
        try {
            const confirmacion = await bcrypt.compare(password, passwordHasheado);
            return confirmacion;
        } catch (error) {
            throw new Error("Error al comparar las contraseñas.");
        }
    }




    
}
export namespace HttpResponse {
    export const response = <T>(
        code: number,
        data?: T,
        message: string = "Transacción Éxitosa"
    ): IHttpResponse<T> => {
        return {
            code, data, message
        }
    };
    //Declaramos una constante que controle el error 


    //!CREAR ERROR para usarlo como catch 
    // export const fail = <T>(
    //     res: Response,
    //     code: number,
    //     data?: T,
    //     message: string = "Error"
    // ) => res.status(code).json({
    //     code: number,
    //     data?: T,
    //     message: string = "Transacción Éxitosa"


    // });
}