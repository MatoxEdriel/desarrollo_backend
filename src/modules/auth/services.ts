import { Person } from "./domain/Person";
import { IUser } from './interfaces/IUser';
import bcrypt from 'bcrypt';
import UserRepository from './repository';
import AuthRepository from '../user/repository';
import { UserException } from "../../error/UserException";


export class UserService {

    private readonly _authRepository: UserRepository;


    constructor() {
        this._authRepository = new UserRepository()
    }


    async loginService(username: string, password: string) {
        const callAllUser = await this._authRepository.readUsers();


        const userToEvaluate = callAllUser.find(u => u.username === username);

        if (!userToEvaluate) {
            throw new UserException("Invalid username or password.");
        }
        const isPasswordValid = await bcrypt.compare(password, userToEvaluate.password);
        if (!isPasswordValid) {
            throw new UserException("Invalid username or password.");
        }

        return userToEvaluate;

    }

    async registerService(username: string, password: string) {
        const userExisting = await this._authRepository.findByUsername(username);
        if (userExisting) {
            throw new Error("user Existing");
        }
        const newUser = await this._authRepository.createUser({
            username,
            password
        });
        //Mandar resposne
        return newUser;
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




