
//!Ya instale joi ahora hay que pensar cual sera la mejro forma de hacer las validaciones 
//!SOLUCIONAR POSICION DE VALIDACIONES, DONDE DEBE IR CORRECTAMENTE 
import Joi from 'joi'
import { IUser } from '../auth/repository';
import { UserException } from '../../error/UserException';
export class UserValidation {
    static validationTypePassword(passwordToEvaluate: string) {
        const schemaPassword = Joi.object({
            passwordToEvaluate: Joi.string()
                //.alphanum()
                .min(10)
                .max(20)
                .pattern(/[A-Za-z]/)
                .pattern(/\d/)
                .pattern(/[!@#$%^&*(),.?":{}|<>]/)
                .required()
        });
        //!Ahora se hace lo que va a devolver si no se cumple 
        //metodo validate te devuelve que tipo de error se cumple 
        const { error } = schemaPassword.validate({ passwordToEvaluate });
        if (error) {
            const errorCurrentlyPassword = error.details.map(detailsError => {
                switch (detailsError.type) {
                    case "string.min":
                        return "cantidad de caracteres poco de password, deben ser mayor de 10"
                    case "string.max":
                        return "sobrepaso la cantidad de caracteres de password, deben ser menor de 20"
                    case "string.pattern":
                        return "El formato de la contraseña no es válido.";
                    case "any.required":
                        return "nombre de usuario OBLIGATORIO";
                        //!Solucionar bug 
                    default:
                        return "La contraseña debe contener al menos un carácter especial y una letra"
                }
            }).join("");
            throw new UserException(errorCurrentlyPassword);
        }

    }
    //al poner any seria impresciso 
    static validationTypeUserName(userNameToEvaluate: string) {
        const schemaUserName = Joi.object({
            userNameToEvaluate: Joi.string()
                .alphanum()
                .min(4)
                .max(10)
                .required()
        });
        const { error } = schemaUserName.validate({ userNameToEvaluate });
        if (error) {
            const errorCurrentlyUserType = error.details.map(detailsError => {
                switch (detailsError.type) {
                    case "string.alphanum":
                        return "los caracteres deben pertenecer a alfanumerico"
                    case "string.min":
                        return "cantidad de caracteres poco, deben ser mayor de 4"
                    case "string.max":
                        return "sobrepaso la cantidad de caracteres de username deben ser menor de 10"
                    case "any.required":
                        return "nombre de usuario OBLIGATORIO";
                    default:
                        return "error desconocido"
                }
            }).join("");
            throw new UserException(errorCurrentlyUserType);
        }
       
        return null;
    }






}