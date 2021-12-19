import {Response, Request} from 'express';
import { InvalidBodyData } from '../errors';
import * as theoryService from '../services/theory.service';
import { ITheory } from '../types/theory';

export const getTheories =  async (req: Request, res: Response): Promise<void> =>{
    try{
        var theories = await theoryService.getTheories();

       res.status(200).send(theories);

    }catch(error){
        res.send(500).send(error)
        throw error;
    }
}

export const createTheory = async (req: Request, res: Response): Promise<void> => {
    try {
       
        const {theories} = req.body;
        
        if(!(theories instanceof Array))
            throw new InvalidBodyData();

        var arrayTheories = theories as Array<ITheory>
        var updatedTheories = await theoryService.createOrUpdateTheories(arrayTheories);

        res.statusCode = 200;
        res.send(updatedTheories)
        return
    }
    catch(error){
        res.statusCode = 500;
        res.send(error);
        throw error;
    }
}