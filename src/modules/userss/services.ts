import { Person } from "./domain/Person";
import { IUser } from './interfaces/IUser';
import UserRepository from './repository';
import AuthRepository from '../auth/repository';
import { UserException } from "../../error/UserException";
import UsersRepository from "../user/repository";

import { HttpResponse } from "../../utils/httpResponse";
import { IUserAttributes } from "../../model/User";



export class UserService {
    private readonly _authRepository: UserRepository;
    private readonly _userRepository: UsersRepository;
    constructor() {
        this._authRepository = new UserRepository()
        this._userRepository = new UsersRepository()
    }



    async registerService(payload: IUserAttributes) {
        const existingUser = await this._userRepository.FindUserByUsername(payload.username);
        if (existingUser) {
          throw new Error("El usuario ya existe");
        }
    
        const newUser = await this._userRepository.CreateUser(payload);
        return HttpResponse.response(
          200,
          newUser,
          "Usuario creado con éxito"
        );
      }

    // async loginService(username: string, password: string) {

    //     try {
    //         const userVerification = await this._authRepository.loginAccess(username, password);
    //         return HttpResponse.response(HttpStatus.ok, userVerification, "verificacion confirmada" );
    //     } catch (error) {

    //         throw new UserException("Error al intentar iniciar sesión.");
    //     }
    // }



    async registerServices(username: string, password: string) {
        const userExisting = await this._authRepository.findByUsername(username);
        if (userExisting) {
            throw new Error("user Existing");
        }
        const newUser = await this._authRepository.createUser({
            username,
            password
        });
        return newUser;
    }

async ReadService(payload:IUserAttributes[]): Promise<IUserAttributes[]>{
    try {
        const UsersFromDB = await this._userRepository.ReadUser();
        return UsersFromDB.map(user => user.toJSON() as IUserAttributes);
    } catch (error) {
        throw new Error("tis");
    }


}


    async readService(): Promise<IUser[]> {
        try {
            const lstUser = await this._authRepository.readUsers();
            return lstUser;

        } catch (error) {
            throw new Error("no cargo la  listaxd");
        }


    }

    async updateService(userName: string, newUserName: string, newPassword: string): Promise<void> {
        try {
            await this._authRepository.updateUsers(userName, newUserName, newPassword);
        } catch (error) {
            throw new UserException("Failed to update user: ");
        }
    }

    async deleteService(userName: string): Promise<void> {
        try {
            await this._authRepository.deleteUser(userName);
        } catch (error) {
            throw new UserException("no se pudo borrar");
        }
    }

}




