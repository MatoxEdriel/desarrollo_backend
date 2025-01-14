import { Request, Response } from "express";
import { Jwt } from 'jsonwebtoken';
import { HttpResponse } from '../src/utils/httpResponse';
import { HttpStatus } from "../src/enums/codesHttpEnum";
//front debe enviar el token 
export const validationToken = (req: Request, res: Response, next: any) => {

    //Aqui creariamos el middleware 
try {
    const token = req.headers.authorization
    if (!token) {
        return HttpResponse.response(HttpStatus.badRequest, "No se ha enviado el token")	
    }   
    

    
} catch (error) {
    throw error 
    
}






}