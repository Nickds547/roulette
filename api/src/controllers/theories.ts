import {Response, Request} from 'express';
import * as theoryService from '../services/theory.service';

export const getTheories =  async (req: Request, res: Response): Promise<void> =>{
    try{
        var theories = await theoryService.getTheories();

       res.status(200).send(theories);

    }catch(error){
        res.send(500).send(error)
        throw error;
    }
}