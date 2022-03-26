import { IUser } from "../types/user";
import * as userDB from '../data/user.data'
import * as authService from './auth.service';

interface IClientUser {
    username: string,
    role: string
}

export const login = async (username, password: string): Promise<IClientUser | null> =>{
    const user = await userDB.getUser(username);
    if(user === null)
        return null;

    var clientUser: IClientUser = {username: user.username, role: user.role};
    
    var validPassword =  await authService.comparePasswords(password, user.password)
    .catch(err => console.log(err)) || false;

    if(validPassword)
        return clientUser;
    else return null;
}