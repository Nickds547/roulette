import { IJwtToken, DataStoredInToken } from "../types/jwt"
import * as jwt from 'jsonwebtoken'

export const createToken =  (id: string): IJwtToken =>{
    const expiresIn = 60 * 60; // an hour
    const secret = process.env.JWT_SECRET;
    const dataStoredInToken: DataStoredInToken = {
        _id: id,
    };
    return {
        expiresIn,
        token: jwt.sign(dataStoredInToken, secret, { expiresIn }),
    };
}