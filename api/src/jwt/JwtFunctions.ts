import * as dotenv from 'dotenv'
import * as jwt from 'jsonwebtoken';

export const generateToken = () => {
    //return jwt.sign();
}



function getTokenSecret(): string{
    dotenv.config();
    return process.env.TOKEN_SECRET;
}