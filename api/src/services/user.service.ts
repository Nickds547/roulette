import { IUser } from "../types/user";
import * as userDB from '../data/user.data'
import * as authService from './auth.service';

export const login = async (username, password: string): Promise<boolean> =>{
    const user = await userDB.getUser(username);
    if(user === null)
        return false;
    
    return await authService.comparePasswords(password, user.password)
    .catch(err => console.log(err)) || false;
}