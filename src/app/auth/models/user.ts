export interface User {
    name: string;
    lastname?: string;
    username: string;
    email: string;
    urlImage?: string;
}

export interface IAuth {
    email: string;
    password: string;
}

export class Auth implements IAuth {
    email: string;
    password: string;

    constructor(){}
}