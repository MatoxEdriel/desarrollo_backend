import { Request } from "express";
import { AuthService } from "./services";
import { HttpResponse } from "../../utils/httpResponse";
import { HttpStatus } from "../../enums/codesHttpEnum";
import { IUser } from "./repository";


//!Esta parte del codigo se podria decir que es un adapter 
export const registerController = async (req: Request) => {
  try {
    console.log(req.body)
 
  const { username, password } = req.body as IUser
  
    return await new AuthService().registerService(username, password);
  } catch (error) {}
};

export const loginController = async (req: Request) => {
   try {
    const { username, password } = req.body;
    console.log(req.body)
    const token = await new AuthService().loginService(username, password);
    return { message: 'Login successful', token };
   } catch (error) {
     throw error
   }
}

export const lookService = async(req:Request) => {

  try{
    const{username, password} = req.body;
    console.log(req.body)
    //que es token? xd
    

  }catch (error){
    throw error 


  }


}