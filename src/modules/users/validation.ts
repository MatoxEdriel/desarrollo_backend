
//!Ya instale joi ahora hay que pensar cual sera la mejro forma de hacer las validaciones 
import Joi from 'joi'
import { IUser } from '../auth/repository';
export class UserValidation {

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
                        return "cantidad de caracteres poco, deben ser mayor de 3"
                    case "string.max":
                        return "sobrepaso la cantidad de caracteres deben ser menor de 10"
                    case "any.required":
                        return "nombre de usuario OBLIGATORIO";
                    default:
                        return "error desconocido"
                }
            }).join("");
            throw new Error(errorCurrentlyUserType);
        }
        //Aqui esta la validacion pero como MANDO UNA RESPUESTA SI NO ESTOY
        //CUMPLIENDO ESO DE QUE SOLO EL controller envia eso 
        //y vi que cuando es validacion es con la logica de negocio o aqui 
        return null;
    }






}