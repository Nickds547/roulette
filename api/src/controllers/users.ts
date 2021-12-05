import {Response, Request} from 'express';
import * as userService from '../services/user.service';

const login = async (req: Request, res: Response): Promise<void> =>{
    try{
        const {username, password } = req.body;
        if(!username.trim() || !password.trim())
            res.status(400).send("Username and password required");

        var loggedIn = await userService.login(username, password);
        if(loggedIn)
            res.status(200).send()
        else
            res.status(404).send("User not found")
    

    } catch(error){
        res.send(500).send(err)
        throw error;
    }
}

export {login}