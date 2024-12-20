import { Person }  from "./class/Person";
import { IUser } from './interfaces/IUser';



export class UserService {

    //private readonly userRepository: UserRepository;
    private person: Person;

//!de ley inicializar o no ? xd
//no tengo constructor vacio 
    constructor(person:Person) {

        this.person = person;
    }

    //hagamos una logica sencilla de negocio donde la app 
    //en cuestion te diga feliz cumple por lo tanto necesitas
    //la edad 
    public getAge(): number {
        const birthDate = this.person.getBirthDate();
        const age = new Date().getFullYear() - birthDate.getFullYear();
        return age;
    }






}