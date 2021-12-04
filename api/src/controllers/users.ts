import {Response, Request} from 'express';
import { IUser } from '../types/user';
import User from '../models/user';

const login = async (req: Request, res: Response): Promise<void> =>{
    try{
        const request = req.body;
        console.log(request);
        res.status(200).send("Hit User endpoint")
    } catch(error){
        throw error;
    }
}

export {login}