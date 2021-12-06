export class Employee{
    idEmployee:number;
    fullname:string;
    email:string;
    address:string;
    phone:string;
    website:string;

    constructor(
        idEmployee:number,
        fullname:string,
        email:string,
        address:string,
        phone:string,
        website:string){
        this.idEmployee = idEmployee;
        this.fullname = fullname;
        this.email = email;
        this.address=address;
        this.phone=phone;
        this.website=website;
    }
}