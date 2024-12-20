//usaremos namespace 
//? escomo un tipo de clase, teniendo 3 tipo de respuesta en namespace

//!con el generico podemos definir el tipo de data cuando usemos el interfaz jeje
export interface IHttpResponse<T> {


    code: number,
    data?: T,
    message: string


}

//!REPASAR 
//Estudiar esta estructura de error mediante interfaces 
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