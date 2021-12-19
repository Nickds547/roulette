import {Request, Response, NextFunction} from 'express';
import { InvalidCredintials } from '../errors';
import * as jwtService from '../services/jwt.service';
import * as userService from '../services/user.service';

export const validateToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const authHeader = req.headers['authorization'];
    const token = authHeader.split(' ')[1];
    if(token){

        try{
            var tokenData = jwtService.decryptToken(token);
            var user = await userService.getUserById(tokenData._id);
            if(user)
                next();
            else throw new InvalidCredintials("Token Authentication Failed")   
        }
        catch(error){
            res.statusCode = 500;
            res.send(error)
        }
    }
    else{
        res.sendStatus(401).send("Token not found")
        return
    }
}