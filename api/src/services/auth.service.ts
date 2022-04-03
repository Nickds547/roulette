import * as bcrypt from 'bcrypt';
import { IClientUser } from '../models/user.model';
import * as jwt from 'jsonwebtoken';
import { IUser } from '../types/user';
import { IJWTToken } from '../models/jwt.model';

export const comparePasswords = async (plainPass: string, hashedPass: string ): Promise<boolean> =>{
   return await bcrypt.compare(plainPass, hashedPass)
}

export const hashPassword = async (plainPass: string): Promise<string> => {
    var salt = await bcrypt.genSalt(10);
    var hash = await bcrypt.hash(plainPass, salt)

    return hash;
}

export const generateJWTToken = (userAccount: IClientUser) => {
    var token = jwt.sign({
        userAccount,
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
    }, process.env.JWT_SECRET);
    return token;
}   

export const decodeToken = (token: string): IJWTToken =>{
    try{
        var verified = jwt.verify(token, process.env.JWT_SECRET);
        return verified as IJWTToken

    } catch(error){
        throw new Error('Invalid Token')
    }
}