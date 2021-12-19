import {Document} from 'mongoose';
import { IJwtToken } from './jwt';

export interface IUser extends Document{
    username: string,
    password: string,
    role: string
}

export class IVerifiedUser {
    public username: string;
    public role: string;
    public id: string;
    public token: IJwtToken;

    public constructor(user: IUser, token: IJwtToken){
        this.username = user.username;
        this.role = user.role;
        this.id = user.id;
        this.token = token;
    }
}