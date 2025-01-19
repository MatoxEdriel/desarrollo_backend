import { IUserAttributes, User } from "../../model/User";







export default class UsersRepository {


    //hay que hace rlos registro de la base de dato 
    async CreateUser(payload: IUserAttributes) {
        try {
            return User.create(payload)
        } catch (error) {
            console.log(error)
        }
    }
    //Esto debe devolver una lista 


    
    async ReadUser(){
        try {
            return await User.findAll();
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    async FindUserByUsername(username: string) {
        try {
            return await User.findOne({
                where: {
                    username
                }
            })
        } catch (error) {
            console.log(error)
        }
    }










}