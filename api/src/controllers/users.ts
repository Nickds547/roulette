import {Response, Request} from 'express';
import * as userService from '../services/user.service';

const login = async (req: Request, res: Response): Promise<void> =>{
    try{
        const {username, password } = req.body;
        if(!username.trim() || !password.trim())
            res.status(400).send("Username and password required");

        var loggedInUser = await userService.login(username, password);
        if(loggedInUser)
            res.status(200).send(loggedInUser)
        else
            res.status(404).send("User not found")
    

    } catch(error){
        res.send(500).send(error)
        throw error;
    }
}

export {login}