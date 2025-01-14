import User, { IUserAttributes } from "../../model/User";



export default class UsersRepository{


//hay que hace rlos registro de la base de dato 
async CreateUser(payload: IUserAttributes){
    try {
        return User.create(payload)
    } catch (error) {
        console.log(error)
    }
}

async FindUserByUsername(username: string){
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