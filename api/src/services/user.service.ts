import { IUser, IVerifiedUser } from "../types/user";
import * as userDB from '../data/user.data'
import * as authService from './auth.service';
import * as jwtService from './jwt.service';
import { InvalidCredintials, NotFoundError } from "../errors";

export const login = async (username, password: string): Promise<IVerifiedUser> =>{
    const user = await userDB.getUser(username);
    if(user === null) throw new NotFoundError('User Not Found');
    
    var validLogin = await authService.comparePasswords(password, user.password)
                    .catch(err => console.log(err)) || false;

    if(validLogin){
        var token = jwtService.createToken(user.id);
        return new IVerifiedUser(user,token);
    }
    else{
        throw new InvalidCredintials("Username and password do not match");
    }
}