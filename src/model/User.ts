import sequelize from "sequelize";
import { DataTypes, ModelDefined, Optional } from "sequelize";
import db from "../config/dbORM";

//debemos adaptar lo que necesitamos al modelo actual 
export interface IUserAttributes {
    id: number;
    username: string;
    password: string;
}

type UserCreationAttributes = Optional<IUserAttributes, 'id'>;


const User: ModelDefined<IUserAttributes,UserCreationAttributes> = db.define(
    'User',
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: new DataTypes.STRING(64),
            allowNull: false

        }
    },
    
    //!ALGO MUY IMPORTANTE QUE DENTOR DEL MODELO puedes definir los hooks o ciertas validaciones

    {
        //pondremos el alcance de envio que se puede hacer al modelo 
        //es decir los datos que se desea enviar a la base de dato 
        scopes: {
            withoutPassword: {
                attributes: { //quiere decir que va a excluir estos datos por seguridad 
                    exclude: ['password', 'createdAt', 'updatedAt']
                }
            }

            
        }

    }

    
    



);

export default User;