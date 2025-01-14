


export class Person {
    private firstName: string;
    private lastName: string;
    private identification: string;
    private birthDate: Date;

    constructor(
        firstName: string,
        lastName: string,
        identification: string,
        birthDate: Date
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.identification = identification;
        this.birthDate = birthDate;
    }



    public getFirstName(): string {
        return this.firstName;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public getIdentification(): string {
        return this.identification;
    }

    public getBirthDate(): Date {
        return this.birthDate;
    }

    // Setters
    public setFirstName(firstName: string): void {
        this.firstName = firstName;
    }

    public setLastName(lastName: string): void {
        this.lastName = lastName;
    }

    public setIdentification(identification: string): void {
        this.identification = identification;
    }

    public setBirthDate(birthDate: Date): void {
        this.birthDate = birthDate;
    }
}